import{r as g,j as r}from"./iframe-CBpAxFwW.js";import{a as m,u as a,F as l,R as c,S as d,t as y}from"./ResetButton-DdOkIqmb.js";import{L as n}from"./Label-D9Ki8i5H.js";import{B as u}from"./Button-DJILh_tx.js";import{S as f}from"./Section-7R7SCXQ7.js";import{A as h}from"./ActionGroup-CIZlagD5.js";import{s as p}from"./ActionBatch-BgON7N4c.js";import{S as s}from"./Slider-BcaCkQvc.js";import{F as b}from"./FieldError-0XXNPrVk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CE4App5Z.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./ActionGroupView-CGPpf-UN.js";import"./Content-D1nnPCvX.js";import"./Heading-MOWZhQDK.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./utils-DlBHsIHw.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./Modal-DexcMb-i.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./Overlay-DXbZZVUA.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./LoadingSpinner-kKg7jHcI.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Dialog-r9nlMSfh.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./ButtonView-C6fcLE9x.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CSCUKvfx.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./useFieldComponent-PtL7ZYGA.js";import"./useFormReset-DcIaZXr3.js";import"./FieldError-Bok8s5mY.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,E=j("submit"),Tr={title:"Integrations/React Hook Form/Slider",component:m,render:()=>{const o=async S=>{await p(1500),E(S)},x=a({defaultValues:{storage:50}}),F=y();return r.jsx(l,{form:x,onSubmit:o,children:r.jsxs(f,{children:[r.jsx(F,{name:"storage",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(h,{children:[r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a();return g.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(l,{form:o,onSubmit:async()=>await p(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsxs(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(n,{children:"Storage"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})})}},i={render:()=>{const o=a();return r.jsxs(l,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(s,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(n,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(u,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(c,{slot:"abort",children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
