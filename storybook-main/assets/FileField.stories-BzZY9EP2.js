import{r as x,j as r}from"./iframe-B2CTi6cm.js";import{a as l,u as a,F as c,R as p,S as d,t as j}from"./ResetButton-DfhEXo1u.js";import{L as s}from"./Label-DccH0oyj.js";import{B as t}from"./Button-_yLWek3e.js";import{S}from"./Section-Cp9Lc84Y.js";import{A as b}from"./ActionGroup-DUcqnoyz.js";import{s as u}from"./ActionBatch-BYvDqB3T.js";import{F as m}from"./FileField-CbuCuF4c.js";import{F as B}from"./FieldError-Cpb_w0Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQSnLDrl.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./clsx-B-dksMZM.js";import"./index-DqADrqmd.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./ActionGroupView-CqxJNoqF.js";import"./Content-CXBi8j7T.js";import"./Heading-DlmM6Hn_.js";import"./Heading-C9cKQsqE.js";import"./RSPContexts-BnlNRtVT.js";import"./utils-CFhs-kxq.js";import"./Text-4QTNuVgz.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./Modal-CkPrUDri.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./Overlay-BCcgEorp.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./LoadingSpinner-DnfUZyUE.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Dialog-D2pl7IFn.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXOW9Qje.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocusable-DeW7JE_I.js";import"./OverlayArrow-8rub2gpn.js";import"./useControlledState-D4tpAkeT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./useCollator-DfexieBx.js";import"./FocusScope-DAIUMiFj.js";import"./VisuallyHidden-D844FGjJ.js";import"./ButtonView-vAiOEZiU.js";import"./Flex-B3V1yHmd.js";import"./useRef-vkhYMc-H.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DUei6bL0.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./useFormValidation-BDHhHN4L.js";import"./FieldError-Cj-zQd3o.js";import"./Input-KDCOY3Ar.js";import"./useFieldComponent-DO-gEAYc.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
