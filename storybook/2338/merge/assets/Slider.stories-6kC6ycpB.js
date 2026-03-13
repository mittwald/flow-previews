import{r as g,j as r}from"./iframe-BFddea_x.js";import{a as m,u as a,F as l,R as c,S as d,t as y}from"./FormRootError-DAozFL3q.js";import{L as n}from"./Label-Cyz25dCh.js";import{B as u}from"./Button-DmFob37h.js";import{S as f}from"./Section-DorsmKJX.js";import{A as h}from"./ActionGroup-B4CMqS7f.js";import{s as p}from"./ActionBatch-BLAWmMpV.js";import{S as s}from"./Slider-Gkn_NjCt.js";import{F as b}from"./FieldError-BfmusLP_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C85Jl_PG.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./utils-D-aZUMcZ.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./Modal-Bu11h-S7.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./Overlay-Dpbqdx3Y.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./LoadingSpinner-BTSUDAP0.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Dialog-Dko8Qxf5.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./ButtonView-O_aZgiJ1.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C_9nT1gz.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useFieldComponent-DrOhnKye.js";import"./useFormReset-C1U9nA2s.js";import"./FieldError-Dj7b6ixT.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,E=j("submit"),kr={title:"Integrations/React Hook Form/Slider",component:m,render:()=>{const o=async S=>{await p(1500),E(S)},x=a({defaultValues:{storage:50}}),F=y();return r.jsx(l,{form:x,onSubmit:o,children:r.jsxs(f,{children:[r.jsx(F,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(h,{children:[r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a();return g.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:o,onSubmit:async()=>await p(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})})}},i={render:()=>{const o=a();return r.jsxs(l,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        </Section>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
