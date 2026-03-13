import{r as b,j as r}from"./iframe-CtEjVB66.js";import{a,u as p,F as c,R as u,S as f,t as E}from"./FormRootError-2xDo0dX3.js";import{L as e}from"./Label-CvAjEv-1.js";import{B as d}from"./Button-BbnjmOHy.js";import{S as h}from"./Section-B3QlijVL.js";import{A as F}from"./ActionGroup-DvmIDtHK.js";import{s as l}from"./ActionBatch-CDzJz977.js";import{L as S}from"./DateInput--vlyF4Vw.js";import{T as t}from"./TimeField-DzJdsH1v.js";import{F as y}from"./FieldError-BzQCv4a3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BbkFIR2Q.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./utils-BuEQZICT.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./Modal-BLKh-L3K.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./LoadingSpinner-CJX4ksrz.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Dialog-vhqDwDKM.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-COxyh1Te.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./FieldError-DJZxrTcD.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./useSpinButton-D2elMItD.js";import"./useFilter-CK_wnS0C.js";import"./useFieldComponent-B7HNchXP.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,B=T("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const o=async j=>{await l(1500),B(j)},x=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=E();return r.jsx(c,{form:x,onSubmit:o,children:r.jsxs(h,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsxs(F,{children:[r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},i={},m={render:()=>{const o=p();return b.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await l(2e3),children:r.jsxs(h,{children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(e,{children:"Time"}),r.jsx(y,{children:"ErrorFromOuterFieldError!"})]})]})})}},s={render:()=>{const o=p();return r.jsxs(c,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(t,{children:r.jsx(e,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(d,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            <TimeField>
              <Label>Time</Label>
            </TimeField>
          </Field>
          <TimeField isInvalid>
            <Label>Time</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TimeField>
        </Section>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="text">
          <TimeField>
            <Label>Time</Label>
          </TimeField>
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
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
