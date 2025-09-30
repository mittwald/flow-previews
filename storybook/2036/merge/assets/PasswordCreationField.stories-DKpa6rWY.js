import{j as r}from"./iframe-CxmXe-_O.js";import{a as p,u as c,F as u,t as C}from"./Form-BHUWEINQ.js";import{L as d}from"./Label-DeDEMxfU.js";import{B as e}from"./Button-DVo7WD-1.js";import{S as T}from"./Section-DzvPU-TL.js";import{A as D}from"./ActionGroup-JupVt7-E.js";import{s as h}from"./Action-CKP9QlTZ.js";import{S as O}from"./SearchField-D-yX6fpu.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-DgfMcKxM.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-5AyxyhbL.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./clsx-B-dksMZM.js";import"./FieldError-CSErn7mI.js";import"./IconWarning-DZNLduw-.js";import"./FieldError-D8IUoOjD.js";import"./utils-Cd13syVz.js";import"./Text-DV04N56Q.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./browser-fsrkaBj_.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./Text-BT2KT2kR.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./ContextMenuSection-qRzHMhAk.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-Bia0_yWL.js";import"./Form-CZOHyRg1.js";import"./Group-S-iYjqxn.js";import"./Input-c2pTqiZe.js";import"./useTextField-BOucmztC.js";import"./useFormValidation-D2bFAqKZ.js";import"./TextField-C2jAMHQX.js";import"./FieldDescription-Dm0WW9cG.js";import"./Tooltip-BVIfvhPi.js";import"./ContextualHelpTrigger-DamsQCXh.js";import"./Heading-BYEzDO2o.js";import"./Heading-CGtduReE.js";import"./useManagedValue-B4k231vh.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},et={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(F=(b=m.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var j,w,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const it=["Default","WithFocusAndError","WithForm"];export{a as Default,m as WithFocusAndError,l as WithForm,it as __namedExportsOrder,et as default};
