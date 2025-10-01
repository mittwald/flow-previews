import{j as r}from"./iframe-FESji9AM.js";import{a as x,u as h,F as f,t as D}from"./Form-_7yjhTRr.js";import{L as o}from"./Label-pNVGz1sw.js";import{B as n}from"./Button-BAxmgeRc.js";import{S}from"./Section-BpWwEjxG.js";import{A as g}from"./ActionGroup-BwhCzZFA.js";import{s as j}from"./Action-CrJdyVja.js";import{J as y,h as B,L as P}from"./DateField-C-WoZgKm.js";import{D as e}from"./DatePicker-CItA5zZz.js";import"./index-Cun1SEai.js";import"./dynamic-CUTbtcza.js";import"./flowComponent-DFQAJ_2B.js";import"./index-BqyXU5kt.js";import"./clsx-B-dksMZM.js";import"./index-ChCUOHR4.js";import"./FieldError-zF1s5-sf.js";import"./IconWarning-BN848dMt.js";import"./FieldError-DlYIOKPN.js";import"./utils-C8mGBIgx.js";import"./Text-CpJktiaj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqB2I62z.js";import"./context-ChjkYhaK.js";import"./browser-CzqLgnVu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DTEJhL1C.js";import"./Hidden-EsiqW7jM.js";import"./Text-BCUZ6o5_.js";import"./EmulatedBoldText-DW2sem56.js";import"./LoadingSpinner-BczKcQ8x.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BW1fAfFv.js";import"./ProgressBar-BtYyhcda.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLpB9Wju.js";import"./useFocus-Bhqj5rOY.js";import"./useFocusRing-zSoWzuoi.js";import"./useFocusable-C4O-U4lE.js";import"./ContextMenuSection-B7y0wjj1.js";import"./Dialog-CXSXfPFc.js";import"./RSPContexts-DiZSnWK-.js";import"./OverlayArrow-8xtTBq8b.js";import"./useControlledState-GWuXrIJ_.js";import"./Collection-5dsgZq8H.js";import"./CollectionBuilder-CIsMqzLE.js";import"./context-BElELkmV.js";import"./Separator-C3QdnVt7.js";import"./SelectionManager-CZcnEcDm.js";import"./useEvent-CA4CrZH2.js";import"./useCollator-B71GfqqY.js";import"./FocusScope-DVksIqcF.js";import"./VisuallyHidden-CxIvQbp6.js";import"./getActionGroupSlot-yK4DsrgL.js";import"./useStatic-JqJXV1dT.js";import"./context-igvBEEcT.js";import"./Form-BtmTLzrx.js";import"./Group-CLv-XZL2.js";import"./Input-BlcEEaiS.js";import"./useFormValidation-B9n8pxvz.js";import"./useFormReset-B3Fww5Tk.js";import"./useSpinButton-C94OVlSq.js";import"./useFilter-BmAxqWoP.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-P9L7ar1v.js";import"./useOverlayController-DwbSSGzq.js";import"./OverlayContextProvider-W9DcC5Hl.js";import"./ClearPropsContextView-NtUgrnKO.js";import"./RangeCalendar-BCyulHGO.js";import"./Heading-aIRtuq7k.js";import"./useUpdateEffect-BQOKGH3G.js";import"./useMakeFocusable-BMtXa_-B.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Kr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Kr as __namedExportsOrder,Jr as default};
