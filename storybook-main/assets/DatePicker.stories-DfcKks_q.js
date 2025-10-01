import{j as r}from"./iframe-BA6fDn45.js";import{a as x,u as h,F as f,t as D}from"./Form-BwCYqKcw.js";import{L as o}from"./Label-12Swj0ll.js";import{B as n}from"./Button-CMSL1MHe.js";import{S}from"./Section-BxQ4KpXF.js";import{A as g}from"./ActionGroup-BWtgkqY9.js";import{s as j}from"./Action-CxZ_aWnU.js";import{J as y,h as B,L as P}from"./DateField-gulZLrOg.js";import{D as e}from"./DatePicker-IDJn83kz.js";import"./index-Cun1SEai.js";import"./dynamic-B5xcbnuy.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./clsx-B-dksMZM.js";import"./index-DorRoXow.js";import"./FieldError-C4B-9J1n.js";import"./IconWarning-RvG5V2Gg.js";import"./FieldError-DSSHPUap.js";import"./utils-B0PKDg6J.js";import"./Text-BlF9rzJU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./context-D6O0cSe8.js";import"./browser-BAFOwcQV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./Text-BB_jWM0A.js";import"./EmulatedBoldText-Dom6ilWt.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQkI-aJ9.js";import"./useFocus-DSzhmy1b.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./ContextMenuSection-BgHMRQz7.js";import"./Dialog-CYKhgjuk.js";import"./RSPContexts-BrsSHeal.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useControlledState-DgfMlGIn.js";import"./Collection-D4YkJ3N5.js";import"./CollectionBuilder-CyubYm4y.js";import"./context-DwuzVRtg.js";import"./Separator-CFMHi57C.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./useCollator-ynWs3FsB.js";import"./FocusScope-B1mU0Ypz.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./getActionGroupSlot-DOaaGACl.js";import"./useStatic-Dc3NgXvq.js";import"./context-aU6YV9zZ.js";import"./Form-BO5siFlo.js";import"./Group-Bspax4i2.js";import"./Input-DxM6bhLy.js";import"./useFormValidation-Da1DrGKi.js";import"./useFormReset-DffYIxF4.js";import"./useSpinButton-3ndxw-ZI.js";import"./useFilter-Cm9DM47m.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-B2jQdqM2.js";import"./useOverlayController-ni00yHWz.js";import"./OverlayContextProvider-DpcAFO97.js";import"./ClearPropsContextView-Dalrb-H-.js";import"./RangeCalendar-CSv5mL7c.js";import"./Heading-BAuF_2Ob.js";import"./useUpdateEffect-lzaQmLRd.js";import"./useMakeFocusable-BwZeESMO.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
