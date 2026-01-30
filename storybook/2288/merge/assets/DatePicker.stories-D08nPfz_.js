import{j as r,r as j}from"./iframe-K4Kgzs5d.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-D8mKGoDl.js";import{L as t}from"./Label-BHhszR2e.js";import{B as u}from"./Button-CLdF1xvY.js";import{S as E}from"./Section-DhkMhEtB.js";import{A as S}from"./ActionGroup-By1FPS3M.js";import{s as c}from"./Action-D8xdI4CM.js";import{I as l,f as D,K as B}from"./DateInput-ChB3mEQl.js";import{D as o}from"./DatePicker-eX_VY477.js";import{F as g}from"./FieldError-BIdQs2eG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d4gvBHma.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./clsx-B-dksMZM.js";import"./index-C1Cqv2DY.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./context-BHsz5d3m.js";import"./useRef-D3B_CRoC.js";import"./utils--XC5cWbY.js";import"./ButtonView-CZyRcM7x.js";import"./browser-9MG5lDdh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./Text-BPEkrilU.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Text-DhK76AHe.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bsv_-vru.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./ContextMenuSection-BbQjr4t3.js";import"./Dialog-D9y6Gm5p.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./useStatic-DUE7vdEn.js";import"./context-Be9deJEN.js";import"./FieldError-CDQ9nLxM.js";import"./Form-BeqJ_QXS.js";import"./Group-BAVjj6lU.js";import"./Input-n3w13r8V.js";import"./useFormValidation-QT1HCjbB.js";import"./useFormReset-Bu0cPn5B.js";import"./useSpinButton-B7TEgkwO.js";import"./useFilter-CF6_w3jE.js";import"./useFieldComponent-XDoLqUAT.js";import"./Popover-B6jJOXre.js";import"./useOverlayController-lRtmjR_K.js";import"./OverlayContextProvider-BLXdSW9X.js";import"./RangeCalendar-gWQaVI-e.js";import"./Heading-BKtqva_S.js";import"./useUpdateEffect-ClckLb26.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
