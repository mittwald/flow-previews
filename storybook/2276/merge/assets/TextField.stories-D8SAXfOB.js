import{j as e,r as E}from"./iframe-BbrP11p-.js";import{A as j}from"./ActionGroup-aeCzi1SV.js";import{B as f}from"./Button-D_6ZCoU5.js";import{L as t}from"./Label-DwqHoWx5.js";import{S as b}from"./Section-OZiyRnMf.js";import{T as n}from"./TextField-BvZ3vJ0s.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-C3DIgWLZ.js";import{s as F}from"./Action-DGTK2X9F.js";import{F as B}from"./FieldError-i_FUROXt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CazQQjW9.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./clsx-B-dksMZM.js";import"./index-CvmJvI2t.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./useStatic-DG6eeeN5.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./Text-BLzGfhm5.js";import"./browser-CKsvW9Gw.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./utils-CfXF9mMB.js";import"./LoadingSpinner-CoKKKOJW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./context-Cg0av1qu.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VHqnVNy0.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocusable-ssdBLHPa.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Dialog-BH0tiGTi.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";import"./TextFieldBase-DshWB0Iu.js";import"./FieldDescription-BZIDgIPl.js";import"./useFieldComponent-CnZp8uAU.js";import"./TextField-DD3L2ijb.js";import"./FieldError-C0mMT85u.js";import"./Form-Da-PMQ7G.js";import"./Group-CeCxvCTb.js";import"./Input-CrFs98bJ.js";import"./useTextField-Bxx5stu4.js";import"./useFormReset-VtyCL_TW.js";import"./useFormValidation-dfDtwXtG.js";import"./useControlledHostValueProps-BXJu_wEe.js";import"./useRef-Cn0hFIKG.js";import"./ButtonView-vY_sxMN2.js";import"./context-DfqDLyvd.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};
