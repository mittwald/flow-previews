import{j as e,r as E}from"./iframe-DA37PzgD.js";import{A as j}from"./ActionGroup-zt1HPiGK.js";import{B as f}from"./Button-C_3hQ6qU.js";import{L as t}from"./Label-DPj6ip94.js";import{S as b}from"./Section-CLHfQYLM.js";import{T as n}from"./TextField-wgx-8I4Z.js";import{b as p,u,F as c,t as S}from"./Form-CNVzXB2H.js";import{R as h,S as x}from"./ResetButton-CD2o3ffQ.js";import{s as F}from"./Action-hYBLKXUj.js";import{F as B}from"./FieldError-CnCGw98P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cec-XZha.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./clsx-B-dksMZM.js";import"./index-CccRe4nm.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./useStatic-ChmTLNpH.js";import"./IconWarning-DMc9nDIB.js";import"./remote-BJWo5b31.js";import"./Text-CKy5VQ2_.js";import"./browser-Tq-Ovndo.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./utils-DtYp6psM.js";import"./LoadingSpinner-YNnYvyP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./context-KzPqYKh3.js";import"./Button-BzF7Ww8-.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--pFlH7xw.js";import"./useFocus-Ck97lmu1.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DYM7NU_i.js";import"./Dialog-hpWxHudW.js";import"./RSPContexts-DnMMFVEJ.js";import"./OverlayArrow-BTxrL9C1.js";import"./useControlledState-izS5uoD6.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./VisuallyHidden-C_Tup-b1.js";import"./TextFieldBase-D_vGziBK.js";import"./FieldDescription-z_r4u74B.js";import"./useFieldComponent-DTrWN6Rf.js";import"./TextField-C4o0vjpo.js";import"./FieldError-jhFQ-VHV.js";import"./Form-DXCSZa8G.js";import"./Group-x45aU-Mx.js";import"./Input-BujLciHZ.js";import"./useTextField-CRU8yiuX.js";import"./useFormReset-ChjOdAw3.js";import"./useFormValidation-2Nc27zh7.js";import"./useControlledHostValueProps-BlueJkLA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-qcoJkYAs.js";import"./context-Cc9V1wfK.js";import"./AlertText-HBRlOgXf.js";import"./AlertIcon-BbDcA2fv.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ke=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ke as __namedExportsOrder,Ge as default};
