import{j as r,r as x}from"./iframe-nlVW-CPZ.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-C0RVFwP1.js";import{L as s}from"./Label-BuWy1qrT.js";import{B as t}from"./Button-_Sn69Jgj.js";import{S}from"./Section-BCmWc09Q.js";import{A as b}from"./ActionGroup-CaBABiHS.js";import{s as u}from"./Action-VhJyCQWd.js";import{F as m}from"./FileField-CCcivmqx.js";import{F as B}from"./FieldError-C-5FG0Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dsm5lbml.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./useRef-CfQO_nnJ.js";import"./utils-CyuEFqip.js";import"./ButtonView-CLlJ09F8.js";import"./browser-BoEfPalF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./Text-BzuDjaz9.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./ContextMenuSection-mf_2MmNA.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./useStatic-C5UephlJ.js";import"./context-DJb9q1Xr.js";import"./useFormValidation-DqSMo-uw.js";import"./FieldError-BpjEpOFY.js";import"./Input-BlMpicf_.js";import"./useFieldComponent-DOzg870F.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ar as __namedExportsOrder,qr as default};
