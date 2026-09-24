// Conversion Event Tracking utility for MIILAANO Fine Dine

export type ConversionEvent =
  | 'click_whatsapp_reserve'
  | 'click_whatsapp_inquire'
  | 'click_phone_call'
  | 'click_get_directions'
  | 'click_view_full_menu'
  | 'click_instagram'
  | 'submit_reservation_form'
  | 'filter_menu_category';

export function trackConversion(event: ConversionEvent, metadata?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // Standard dataLayer push (for GTM / Google Analytics / Meta Pixel)
    const windowWithDataLayer = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
    windowWithDataLayer.dataLayer.push({
      event,
      timestamp: new Date().toISOString(),
      ...metadata,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Conversion Tracked]: ${event}`, metadata);
    }
  }
}
