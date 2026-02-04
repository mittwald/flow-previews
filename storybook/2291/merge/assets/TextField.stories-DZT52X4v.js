import{j as e,r as E}from"./iframe-BrRYKFNZ.js";import{A as j}from"./ActionGroup-CcJlTct_.js";import{B as f}from"./Button-C60cqGfK.js";import{L as t}from"./Label-16dSI6nY.js";import{S as b}from"./Section-UYkQGpw-.js";import{T as n}from"./TextField-CKrmvDBK.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-B0FIkwa9.js";import{s as F}from"./Action-D8nw7HFc.js";import{F as B}from"./FieldError-Ce69irxX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CVEHQCEx.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./clsx-B-dksMZM.js";import"./index--DYCSdQe.js";import"./getActionGroupSlot-BX1oqOED.js";import"./useStatic-CMNgov9B.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./Text-BQhotjr-.js";import"./browser-rpb3JyGK.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Text-C7DedtDs.js";import"./utils-B1YhIU5r.js";import"./LoadingSpinner-Djs3hRtr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-fw0Lqzwn.js";import"./useFocus-Br7iUm-k.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocusable-NfSEA2Af.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CWAGy83O.js";import"./Dialog-CrRUDPQZ.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./useCollator-C7d0Ik_Q.js";import"./FocusScope-C9Un_YW5.js";import"./VisuallyHidden-VjzJwiBh.js";import"./useControlledHostValueProps-S6eu0XJI.js";import"./useFieldComponent-D0nvFHA9.js";import"./FieldDescription-59pme2uS.js";import"./TextField-CspPj2uB.js";import"./FieldError-DMOv5TcV.js";import"./Form-C0F-7ONn.js";import"./Group-DhsxY3hh.js";import"./Input-DUxkIprV.js";import"./useTextField-GgVwnZzD.js";import"./useFormReset-9TaX9dD_.js";import"./useFormValidation-vznVoA4Z.js";import"./useRef-CwDhitpI.js";import"./ButtonView-CpxOXa2e.js";import"./context-CrKKxYCQ.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
