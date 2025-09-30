import{j as e}from"./iframe-CxmXe-_O.js";import{A as y}from"./ActionGroup-JupVt7-E.js";import{B as m}from"./Button-DVo7WD-1.js";import{L as o}from"./Label-DeDEMxfU.js";import{S as B}from"./Section-DzvPU-TL.js";import{T as n}from"./TextField-DzUdFMMH.js";import{a as L,u,F as c,t as N}from"./Form-BHUWEINQ.js";import{s as V}from"./Action-CKP9QlTZ.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./useStatic-8bLBY8Gb.js";import"./IconWarning-DZNLduw-.js";import"./Text-BT2KT2kR.js";import"./browser-fsrkaBj_.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./Text-DV04N56Q.js";import"./utils-Cd13syVz.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./TextFieldBase-DLSID0TD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CSErn7mI.js";import"./FieldError-D8IUoOjD.js";import"./FieldDescription-Dm0WW9cG.js";import"./TextField-C2jAMHQX.js";import"./Form-CZOHyRg1.js";import"./Group-S-iYjqxn.js";import"./Input-c2pTqiZe.js";import"./useTextField-BOucmztC.js";import"./useFormValidation-D2bFAqKZ.js";import"./ReactAriaControlledValueFix-Bia0_yWL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),ke={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(n,{...i,type:"email",inputMode:"email",children:e.jsx(o,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,S,g;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Email</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(g=(S=p.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const He=["Default","WithTransformedValue","WithFocusAndError"];export{a as Default,p as WithFocusAndError,l as WithTransformedValue,He as __namedExportsOrder,ke as default};
