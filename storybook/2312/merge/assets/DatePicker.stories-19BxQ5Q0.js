import{r as j,j as r}from"./iframe-CLDMeli7.js";import{a,u as p,F as d,R as f,S as h,t as b}from"./ResetButton-B9K5TeM3.js";import{L as t}from"./Label-B6NnPYhK.js";import{B as u}from"./Button-BzVheXKP.js";import{S as E}from"./Section-28IJbL-t.js";import{A as S}from"./ActionGroup-BbpNtRTX.js";import{s as c}from"./Action-B36_bDyV.js";import{I as l,f as D,K as B}from"./DateInput-BDsWGWV-.js";import{D as o}from"./DatePicker-DeSRtl1B.js";import{F as g}from"./FieldError-DepvOCr4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQUXTbxb.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./clsx-B-dksMZM.js";import"./index-9eDA9WpJ.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./context-CJeO-2nS.js";import"./useRef-DgpT8kFB.js";import"./utils-CeJP1xg2.js";import"./ButtonView-DsZzpVxf.js";import"./browser-DchrXhwC.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./IconWarning-p4W4x8Yn.js";import"./remote-B4IT0gy2.js";import"./Text-CP7Ip6pC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./Text-Doo8ujkC.js";import"./LoadingSpinner-DoDeCRPK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DkOX4zii.js";import"./ProgressBar-DFW8NzQ8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5-cRdm9R.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./useFocusable-B-HKy_Nj.js";import"./ContextMenuSection-BNGygWDz.js";import"./Dialog-BqnORwX4.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./VisuallyHidden--NZ_Ses-.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./useStatic-CZ7UkCej.js";import"./context-ZEvjkl_L.js";import"./FieldError-DzENXQGA.js";import"./Form-BccCs6cg.js";import"./Group-DSf025N_.js";import"./Input-imA8gTQv.js";import"./useFormReset-BkQU1ELB.js";import"./useFormValidation-DfHAcEvH.js";import"./useSpinButton-BTPQpYxm.js";import"./useFilter-_JRY0ikt.js";import"./useFieldComponent-BtEJhhry.js";import"./Popover-PjJ853r6.js";import"./useOverlayController-CfvFaHFD.js";import"./OverlayContextProvider-D58HtU5y.js";import"./RangeCalendar-Bd2jWXcg.js";import"./Heading-6_ezcD4u.js";import"./useUpdateEffect-BY3xEMG0.js";import"./AlertText-tt9Tj7ZR.js";import"./AlertIcon-BgEbwDh4.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
