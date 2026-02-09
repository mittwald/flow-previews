import{r as E,j as e}from"./iframe-DsvUdpXw.js";import{A as j}from"./ActionGroup-DXsjU9YE.js";import{B as f}from"./Button-Bh17vETd.js";import{L as t}from"./Label-V0M08dzp.js";import{S as b}from"./Section-DVr7ON9z.js";import{T as n}from"./TextField-Di2EWGyH.js";import{a as p,u,F as c,R as h,S as x,t as S}from"./ResetButton-BMOT3GH_.js";import{s as F}from"./Action-CHQuPKKz.js";import{F as B}from"./FieldError-DMawyIiV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-6cr1cE.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./useStatic-B4i3epQD.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Text-DX5v3ksG.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./utils-elFy1-Tx.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CZOOjTrg.js";import"./Dialog-DDWgyAFS.js";import"./RSPContexts-C2fytUZa.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";import"./useControlledHostValueProps-CBts7xi2.js";import"./useFieldComponent-CWVnpPPS.js";import"./FieldDescription-GkX1e7wK.js";import"./TextField-D9iaV1ub.js";import"./FieldError-S3zhgpi7.js";import"./Form-_ij7bXRe.js";import"./Group-VzCh1Jz3.js";import"./Input-B3qlT_4M.js";import"./useTextField-CImQ85Uo.js";import"./useFormReset-BZPoHMi4.js";import"./useFormValidation-B3UJ98ri.js";import"./useRef-Cuy_dzRn.js";import"./ButtonView-ngwm-oT3.js";import"./context-ya2kPvzB.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <ResetButton>Reset</ResetButton>
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
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Ue=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ue as __namedExportsOrder,Ie as default};
