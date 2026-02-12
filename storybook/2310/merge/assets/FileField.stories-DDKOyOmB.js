import{r as x,j as r}from"./iframe-BO07bPAa.js";import{a as l,u as a,F as c,R as d,S as p,t as j}from"./ResetButton-CmT4K3eb.js";import{L as s}from"./Label-D0Lhb5Vq.js";import{B as t}from"./Button-CCtz8EXc.js";import{S}from"./Section-DvElnkSb.js";import{A as b}from"./ActionGroup-BkcQ2vZG.js";import{s as u}from"./Action-CP6j8Viu.js";import{F as m}from"./FileField-BCaObNty.js";import{F as B}from"./FieldError-DlyPLChi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CShChD8Y.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./clsx-B-dksMZM.js";import"./index-C__iODou.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./context-DKHz4OX0.js";import"./useRef-DKBU6sSn.js";import"./utils-DpF9Snp1.js";import"./ButtonView-BuOsec3O.js";import"./browser-B0pBncgx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./IconWarning-ClLv5I07.js";import"./remote-C9jEPRv0.js";import"./Text-CwdryKSs.js";import"./EmulatedBoldText-Bl01c38V.js";import"./Text-sIV6FVOB.js";import"./LoadingSpinner-BTNHBT1C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CPst5v-a.js";import"./ProgressBar-BUHmhWxP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UbwEnmrk.js";import"./useFocus-ntzScLPi.js";import"./useFocusRing-DXebh_G-.js";import"./useFocusable-C66-pRTt.js";import"./ContextMenuSection-CU407IGI.js";import"./Dialog-BBC5U6gG.js";import"./RSPContexts-BnTR6z_r.js";import"./OverlayArrow-BbflWQr7.js";import"./useControlledState-DyIed2bM.js";import"./Collection-BC2XOQqq.js";import"./CollectionBuilder-CRw4EwC7.js";import"./SelectionIndicator-Dw6-XKp3.js";import"./Separator-DdhmoA8S.js";import"./SelectionManager-Chxg5cEr.js";import"./useEvent-D6dqrA9f.js";import"./useCollator-82KNa-4u.js";import"./FocusScope-BA1MxA3e.js";import"./VisuallyHidden-DCYSiy07.js";import"./getActionGroupSlot-CHQAyQmW.js";import"./useStatic-Dc6GYAIK.js";import"./context-D6FqIPNt.js";import"./useFormValidation-CRjEiOmE.js";import"./FieldError-cxGJZPY3.js";import"./Input-Drs8jYRG.js";import"./useFieldComponent-B5uAaQ_H.js";import"./AlertText-Ca5jxNB-.js";import"./AlertIcon-CagNIYo0.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
