import{j as e,r as E}from"./iframe-nlVW-CPZ.js";import{A as j}from"./ActionGroup-CaBABiHS.js";import{B as f}from"./Button-_Sn69Jgj.js";import{L as t}from"./Label-BuWy1qrT.js";import{S as b}from"./Section-BCmWc09Q.js";import{T as n}from"./TextField-CAVZM0Px.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-C0RVFwP1.js";import{s as F}from"./Action-VhJyCQWd.js";import{F as B}from"./FieldError-C-5FG0Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dsm5lbml.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./useStatic-C5UephlJ.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./Text-BzuDjaz9.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./utils-CyuEFqip.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-mf_2MmNA.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./useControlledHostValueProps-C--TiKRF.js";import"./useFieldComponent-DOzg870F.js";import"./FieldDescription-a2tRS2_K.js";import"./TextField-D0tY8Qlz.js";import"./FieldError-BpjEpOFY.js";import"./Form-DSPAlIu9.js";import"./Group-w-lYdjjN.js";import"./Input-BlMpicf_.js";import"./useTextField-C4USa82P.js";import"./useFormReset-J8eUPjf8.js";import"./useFormValidation-DqSMo-uw.js";import"./useRef-CfQO_nnJ.js";import"./ButtonView-CLlJ09F8.js";import"./context-DJb9q1Xr.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
