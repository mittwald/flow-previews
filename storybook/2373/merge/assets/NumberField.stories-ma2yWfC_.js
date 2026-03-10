import{r as x,j as r}from"./iframe-BOfxQ126.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-4yrHDRhQ.js";import{L as o}from"./Label-CqRpIaXO.js";import{B as u}from"./Button-y6FeYCBC.js";import{S as g}from"./Section-C6FrpL68.js";import{A as b}from"./ActionGroup-BJX7-2AL.js";import{s as p}from"./ActionBatch-B3OckZQJ.js";import{N as t}from"./NumberField-D-E5jIjG.js";import{F as E}from"./FieldDescription-BJeDAEM1.js";import{F as S}from"./FieldError-DCo5F_nc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEImSkKK.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./clsx-B-dksMZM.js";import"./index-X6kmY2GD.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./context-Bpmop-v_.js";import"./ActionGroupView-x-6e1Fyk.js";import"./Content-C0CTBJnI.js";import"./Heading-XWK9z325.js";import"./Heading-t8wVFZ6a.js";import"./RSPContexts-8t9TLuqJ.js";import"./utils-Ca0-H8MP.js";import"./Text-kIO13lDY.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./Text-OoL-eb0_.js";import"./Modal-DHfoMw3X.js";import"./useOverlayController-NqoHBo9l.js";import"./useStatic-DMadDPeg.js";import"./Overlay-D-1f0Sj_.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./LoadingSpinner-BjosoRSs.js";import"./IconWarning-BoBPkWIf.js";import"./remote-DjEyU7NV.js";import"./Dialog-CCDN7DJz.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-up0eurfY.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useFocusable-C918yQby.js";import"./OverlayArrow-DOAKdHdF.js";import"./useControlledState-DE1u8yHr.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./FocusScope-CCHjHw-t.js";import"./VisuallyHidden-DfBCvB4u.js";import"./ButtonView-CgihUfDk.js";import"./Flex-ClQXTQke.js";import"./useRef-ChX_wJCz.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-cxjJtW6K.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./useFieldComponent-D5YpTCds.js";import"./useControlledHostValueProps-C2Pi2SXC.js";import"./FieldError-GcSEBXG9.js";import"./Form-CRtfSpWI.js";import"./Group-CfOaYHrv.js";import"./Input-Dk2m6F6l.js";import"./useFormValidation-CxieGJiT.js";import"./useSpinButton-BZALGZlr.js";import"./useFormReset-B-rsDa9Z.js";import"./useTextField-B-yXo6Fk.js";import"./AlertText-DpLHter-.js";import"./AlertIcon-CIUnjm1o.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
