import{j as r,r as j}from"./iframe-DqoQz6HB.js";import{a,u as p,F as d,t as b,R as f,S as h}from"./ResetButton-CNSz0hY7.js";import{L as t}from"./Label-Bciq9MXz.js";import{B as u}from"./Button-TzxOXnkY.js";import{S as E}from"./Section-ut8JUHwb.js";import{A as S}from"./ActionGroup-C8LdOn1_.js";import{s as c}from"./Action-DgtVbOuJ.js";import{I as l,f as D,K as B}from"./DateInput-Cw2H_1v6.js";import{D as o}from"./DatePicker-O448aukR.js";import{F as g}from"./FieldError-eFMpVXMe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-uyvUxMs1.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./clsx-B-dksMZM.js";import"./index-BvQFjuk4.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./context-BlYILeGE.js";import"./useRef-R9mllTp5.js";import"./utils-OqNg9teq.js";import"./ButtonView-B2hG11WB.js";import"./browser-CwaVi4T-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./Text-CYiIq5CT.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./Text-78LD2Kdh.js";import"./LoadingSpinner-DERXhFNJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CY3jZXsw.js";import"./ProgressBar-C57Cfwin.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CCbYr5fG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./ContextMenuSection-Bjk6b3v9.js";import"./Dialog-D_XSL9SB.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./useControlledState-CN54iNBt.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./getActionGroupSlot-6JauDhjj.js";import"./useStatic-DhkP1cmF.js";import"./context-DlAFKpyv.js";import"./FieldError-WaBW2_7-.js";import"./Form-JBdB4aYd.js";import"./Group-NaJr1bQi.js";import"./Input-C72DEuZz.js";import"./useFormValidation-CMGs1DuG.js";import"./useFormReset-BpNr6OOM.js";import"./useSpinButton-cSWILPnz.js";import"./useFilter-C2CyLzw-.js";import"./useFieldComponent-X8YFoMoP.js";import"./Popover-Cy3iouQi.js";import"./useOverlayController-rufURv7M.js";import"./OverlayContextProvider-D9Ss5hpb.js";import"./RangeCalendar-BIAq-Qvp.js";import"./Heading-BOKCcgdn.js";import"./useUpdateEffect-BPAFn4wG.js";import"./AlertText-DJCCvPqw.js";import"./AlertIcon-DE1EJRfD.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
