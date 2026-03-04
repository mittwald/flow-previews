import{r as g,j as r}from"./iframe-CEWg6_IX.js";import{a as m,u as a,F as l,R as c,S as d,t as y}from"./ResetButton-C4Ep7Det.js";import{L as n}from"./Label-BaJSnICs.js";import{B as u}from"./Button-CA6AkUR_.js";import{S as f}from"./Section-smxk9QAc.js";import{A as h}from"./ActionGroup-2A27ggL_.js";import{s as p}from"./ActionBatch-CnX-7Tzc.js";import{S as s}from"./Slider-DIGYdBlt.js";import{F as b}from"./FieldError-fCgHoEMk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-JOnDgprM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./ActionGroupView-oC77FUWd.js";import"./Content-CRiMoq0F.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./utils-VWmQzJjV.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./Modal-BUEX4x6z.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./useFieldComponent-BOMK2S5G.js";import"./useFormReset-D1AT4nVs.js";import"./FieldError-B_BExaNJ.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,E=j("submit"),Tr={title:"Integrations/React Hook Form/Slider",component:m,render:()=>{const o=async S=>{await p(1500),E(S)},x=a({defaultValues:{storage:50}}),F=y();return r.jsx(l,{form:x,onSubmit:o,children:r.jsxs(f,{children:[r.jsx(F,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(h,{children:[r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a();return g.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:o,onSubmit:async()=>await p(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})})}},i={render:()=>{const o=a();return r.jsxs(l,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,kr as __namedExportsOrder,Tr as default};
