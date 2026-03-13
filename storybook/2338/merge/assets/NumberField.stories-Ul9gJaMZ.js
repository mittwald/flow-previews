import{r as b,j as r}from"./iframe-BFddea_x.js";import{a,u as l,F as d,R as c,S as f,t as g}from"./FormRootError-DAozFL3q.js";import{L as o}from"./Label-Cyz25dCh.js";import{B as u}from"./Button-DmFob37h.js";import{S as h}from"./Section-DorsmKJX.js";import{A as F}from"./ActionGroup-B4CMqS7f.js";import{s as p}from"./ActionBatch-BLAWmMpV.js";import{N as t}from"./NumberField-BeMPzXJX.js";import{F as y}from"./FieldDescription-DqsHbSnc.js";import{F as E}from"./FieldError-BfmusLP_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C85Jl_PG.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./utils-D-aZUMcZ.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./Modal-Bu11h-S7.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./LoadingSpinner-BTSUDAP0.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C_9nT1gz.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useFieldComponent-DrOhnKye.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./FieldError-Dj7b6ixT.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useFormValidation-CYvJLeFF.js";import"./useSpinButton-1pG5mt9H.js";import"./useFormReset-C1U9nA2s.js";import"./useTextField-C79BrPY1.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,A=S("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async j=>{await p(1500),A(j)},x=l({defaultValues:{ageDefaultValue:36}}),i=g();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(h,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(y,{children:"You have to be at least 18 years old"})]})}),r.jsxs(F,{children:[r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:e,onSubmit:async()=>await p(2e3),children:r.jsxs(h,{children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>e.setFocus("field"),children:"Focus through form"}),r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
            <NumberField>
              <Label>Age</Label>
            </NumberField>
          </Field>
          <NumberField isInvalid>
            <Label>Age</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </NumberField>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Qr as __namedExportsOrder,Jr as default};
