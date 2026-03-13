import{r as j,j as r}from"./iframe-CtEjVB66.js";import{a as m,u as a,F as c,R as l,S as u,t as b}from"./FormRootError-2xDo0dX3.js";import{L as s}from"./Label-CvAjEv-1.js";import{B as d}from"./Button-BbnjmOHy.js";import{S as h}from"./Section-B3QlijVL.js";import{A as f}from"./ActionGroup-DvmIDtHK.js";import{s as p}from"./ActionBatch-CDzJz977.js";import{S as n}from"./SearchField-o6gN5eWI.js";import{F as E}from"./FieldError-BzQCv4a3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BbkFIR2Q.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./utils-BuEQZICT.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./Modal-BLKh-L3K.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./LoadingSpinner-CJX4ksrz.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-COxyh1Te.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./useFieldComponent-B7HNchXP.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./FieldError-DJZxrTcD.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:m,render:()=>{const o=async x=>{await p(5e3),B(x)},F=a({defaultValues:{user:""}}),S=b();return r.jsx(c,{form:F,onSubmit:o,children:r.jsxs(h,{children:[r.jsx(S,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(f,{children:[r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await p(2e3),children:r.jsxs(h,{children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},i={render:()=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(f,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(l,{slot:"abort",children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
            <SearchField>
              <Label>Suche</Label>
            </SearchField>
          </Field>
          <SearchField isInvalid>
            <Label>Suche</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </SearchField>
        </Section>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
