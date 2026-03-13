import{r as g,j as e}from"./iframe-CtEjVB66.js";import{A as p}from"./ActionGroup-DvmIDtHK.js";import{B as b}from"./Button-BbnjmOHy.js";import{L as o}from"./Label-CvAjEv-1.js";import{S as h}from"./Section-B3QlijVL.js";import{T as t}from"./TextField-CTAsvyVX.js";import{a as x,u as c,F as u,R as F,S as f,t as S}from"./FormRootError-2xDo0dX3.js";import{s as j}from"./ActionBatch-CDzJz977.js";import{F as E}from"./FieldError-BzQCv4a3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BbkFIR2Q.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./useStatic-DVJZwH2g.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./utils-BuEQZICT.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-COxyh1Te.js";import"./Dialog-vhqDwDKM.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./useFieldComponent-B7HNchXP.js";import"./FieldDescription-DOW1EL7Z.js";import"./TextField-uAKnHDmd.js";import"./FieldError-DJZxrTcD.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Heading-c1W7e3IT.js";import"./Heading-DMz3CQ7g.js";import"./Modal-BLKh-L3K.js";import"./useOverlayController-BctbVInN.js";import"./Overlay-BGmB2cy_.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./ButtonView-Ci2JAKGf.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),ze={title:"Integrations/React Hook Form/TextField",component:x,render:()=>{const n=async s=>{await j(1500),y(s)},r=c({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:()=>{const n=s=>{y(s)},r=c({defaultValues:{name:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=c();return g.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(u,{form:n,onSubmit:async()=>await j(2e3),children:e.jsxs(h,{children:[e.jsx(x,{name:"field",children:e.jsx(t,{children:e.jsx(o,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(o,{children:"Field"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},d={render:n=>{const r=c();return e.jsxs(u,{form:r,onSubmit:async()=>await j(2e3),children:[e.jsx(x,{name:"field",children:e.jsx(t,{...n,type:"email",inputMode:"email",children:e.jsx(o,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(p,{children:[e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton slot="abort">Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <TextField>
              <Label>Field</Label>
            </TextField>
          </Field>
          <TextField isInvalid>
            <Label>Field</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TextField>
        </Section>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Qe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{m as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Qe as __namedExportsOrder,ze as default};
