import{j as r,r as g}from"./iframe-DqoQz6HB.js";import{a as s,u as a,F as u,t as F,R as d,S as c}from"./ResetButton-CNSz0hY7.js";import{L as n}from"./Label-Bciq9MXz.js";import{B as p}from"./Button-TzxOXnkY.js";import{S}from"./Section-ut8JUHwb.js";import{A as b}from"./ActionGroup-C8LdOn1_.js";import{s as l}from"./Action-DgtVbOuJ.js";import{S as m}from"./Slider-CwCxepWV.js";import{F as j}from"./FieldError-eFMpVXMe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-uyvUxMs1.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./clsx-B-dksMZM.js";import"./index-BvQFjuk4.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./context-BlYILeGE.js";import"./useRef-R9mllTp5.js";import"./utils-OqNg9teq.js";import"./ButtonView-B2hG11WB.js";import"./browser-CwaVi4T-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./IconWarning-CoQAKsWX.js";import"./remote-BY0bWN8b.js";import"./Text-CYiIq5CT.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./Text-78LD2Kdh.js";import"./LoadingSpinner-DERXhFNJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CY3jZXsw.js";import"./ProgressBar-C57Cfwin.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CCbYr5fG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DK4IO0uy.js";import"./useFocus-zlQbWpmC.js";import"./useFocusRing-B1e51Uuh.js";import"./useFocusable-CZXIUH7h.js";import"./ContextMenuSection-Bjk6b3v9.js";import"./Dialog-D_XSL9SB.js";import"./RSPContexts-C8plwG6a.js";import"./OverlayArrow-8MHoSxw7.js";import"./useControlledState-CN54iNBt.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./getActionGroupSlot-6JauDhjj.js";import"./useStatic-DhkP1cmF.js";import"./context-DlAFKpyv.js";import"./useFieldComponent-X8YFoMoP.js";import"./useFormReset-BpNr6OOM.js";import"./FieldError-WaBW2_7-.js";import"./AlertText-DJCCvPqw.js";import"./AlertIcon-DE1EJRfD.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),vr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(u,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},o={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const t=a();return r.jsxs(u,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
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
}`,...i.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{e as Default,o as WithFieldError,i as WithFocus,Ar as __namedExportsOrder,vr as default};
