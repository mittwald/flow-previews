import{r as x,j as r}from"./iframe-CtEjVB66.js";import{a as m,u as p,F as a,R as l,S as u,t as E}from"./FormRootError-2xDo0dX3.js";import{B as d}from"./Button-BbnjmOHy.js";import{S as f}from"./Section-B3QlijVL.js";import{A as h}from"./ActionGroup-DvmIDtHK.js";import{s as c}from"./ActionBatch-CDzJz977.js";import{S as n}from"./Switch-DFBGVKQx.js";import{F as j}from"./FieldError-BzQCv4a3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BbkFIR2Q.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./utils-BuEQZICT.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./Modal-BLKh-L3K.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./LoadingSpinner-CJX4ksrz.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";import"./ContextMenuSection-COxyh1Te.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./useFieldComponent-B7HNchXP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CL5C9z_j.js";import"./useFormReset-2RZyXaKm.js";import"./FieldError-DJZxrTcD.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Cr={title:"Integrations/React Hook Form/Switch",component:m,render:()=>{const t=async S=>{await c(5e3),b(S)},o=p({defaultValues:{isEnabled:!1}}),F=E();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(f,{children:[r.jsx(F,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsxs(h,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(a,{form:o,onSubmit:async()=>await c(2e3),children:r.jsxs(f,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(h,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            <Switch {...props}>Field1</Switch>
          </Field>
          <Switch>
            Field2
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Switch>
        </Section>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Cr as default};
