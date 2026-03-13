import{r as j,j as r}from"./iframe-BFddea_x.js";import{a as c,u as p,F as a,R as l,S as f,t as b}from"./FormRootError-DAozFL3q.js";import{B as u}from"./Button-DmFob37h.js";import{S as h}from"./Section-DorsmKJX.js";import{A as x}from"./ActionGroup-B4CMqS7f.js";import{s as d}from"./ActionBatch-BLAWmMpV.js";import{C as t}from"./Checkbox-C9k4Uk68.js";import{F as E}from"./FieldError-BfmusLP_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C85Jl_PG.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./utils-D-aZUMcZ.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./Modal-Bu11h-S7.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./LoadingSpinner-BTSUDAP0.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";import"./ContextMenuSection-C_9nT1gz.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useFieldComponent-DrOhnKye.js";import"./FieldError-Dj7b6ixT.js";import"./Form-Cmx7zRsN.js";import"./useFormValidation-CYvJLeFF.js";import"./useToggleState-hE4ermpf.js";import"./useFormReset-C1U9nA2s.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,y=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const e=async F=>{await d(1500),y(F)},o=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=b();return r.jsx(a,{form:o,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(x,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},i={render:e=>{const o=p();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await d(2e3),children:r.jsxs(h,{children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:e=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...e,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(x,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Checkbox {...props}>Accept terms</Checkbox>
          </Field>
          <Checkbox isInvalid>
            Accept terms
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Checkbox>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Vr as default};
