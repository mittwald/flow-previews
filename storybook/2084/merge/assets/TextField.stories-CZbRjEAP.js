import{j as e,r as S}from"./iframe-CPZmCQj-.js";import{A as F}from"./ActionGroup-BEDNYTV6.js";import{B as m}from"./Button-CO0ZKbGC.js";import{L as n}from"./Label-Cl3ovliO.js";import{S as f}from"./Section-BlZ_9OES.js";import{T as t}from"./TextField-CDWl9mnT.js";import{a as h,u,F as p,t as j}from"./Form-C6vWvGsj.js";import{s as x}from"./Action-C3sEJruT.js";import{F as g}from"./useFieldComponent-ZdrCImE8.js";import"./index-nuYtCEEu.js";import"./dynamic-C0WBJwRj.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./useStatic-BEtxpUKF.js";import"./IconWarning-BHYwQlMQ.js";import"./Text-cGw-MBFK.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./utils-DbTuSxgD.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./Button-BLjAzLtk.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Dto6kOnn.js";import"./Dialog-DJw1jmu7.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";import"./TextFieldBase-CPSGO8hB.js";import"./FieldDescription-BFKEApQk.js";import"./TextField-BQ8NGeCA.js";import"./Form-KkxpJ3qz.js";import"./Group-Csdn_P-J.js";import"./Input-CQkI7-zw.js";import"./useTextField-eZki_XjH.js";import"./useFormReset-BZ0LqTvh.js";import"./useFormValidation-D952ndYN.js";import"./ReactAriaControlledValueFix-wp7kzKG1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-7pI23nLQ.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Me={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),b(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(F,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{b(s)},r=u({defaultValues:{name:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Pe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{a as Default,d as WithFieldError,c as WithFocus,l as WithTransformedValue,Pe as __namedExportsOrder,Me as default};
