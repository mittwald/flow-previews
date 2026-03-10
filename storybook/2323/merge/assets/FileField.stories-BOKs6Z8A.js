import{r as x,j as r}from"./iframe-EfPcFfHz.js";import{a as l,u as a,F as c,R as p,S as d,t as j}from"./FormRootError-Chgvna3W.js";import{L as s}from"./Label-DkribH7U.js";import{B as t}from"./Button-wFzIQtGi.js";import{S}from"./Section-CV61pRu2.js";import{A as b}from"./ActionGroup-Lxqbjb-D.js";import{s as u}from"./ActionBatch-DG-IZD13.js";import{F as m}from"./FileField-D9HUTJvI.js";import{F as B}from"./FieldError-Bm6xTrGY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BKd_XzPu.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./Overlay-BiUskXOC.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./LoadingSpinner-5WRu_N9f.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./utils-Cnkpfm_P.js";import"./Dialog-DJ1EGGEI.js";import"./Button-BlxZZJFh.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./context-kn7lEdrW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CzmE2CoS.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./useControlledState-WqoJm4pI.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./Text-B4oHPq8R.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./VisuallyHidden-CH2GsO1v.js";import"./ActionGroupView-HLt9OMBJ.js";import"./Content-CoxcjBGV.js";import"./Heading-D-lxgqSK.js";import"./Heading-fpS9fclC.js";import"./Text-CRFCcT-P.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Modal-Lm05iuR_.js";import"./ButtonView-BN2-gVKk.js";import"./Flex-DI6XMfKS.js";import"./useRef-ClwNZ3BN.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CgcrgsP7.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./useFormValidation-DvOB0MQU.js";import"./FieldError-DGjeovc7.js";import"./Input-DZTbr2NP.js";import"./useFieldComponent-BpgXbjM-.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
