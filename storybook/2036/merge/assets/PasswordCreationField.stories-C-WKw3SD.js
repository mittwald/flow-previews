import{j as r}from"./iframe-lUo2nGnz.js";import{a as p,u as c,F as u,t as C}from"./Form-DCV6t3hU.js";import{L as d}from"./Label-JtAW2uUp.js";import{B as e}from"./Button-BJSwvuxb.js";import{S as T}from"./Section-BmAZdHSz.js";import{A as D}from"./ActionGroup-DNEOJX-0.js";import{s as h}from"./Action-CDVhK15_.js";import{S as O}from"./SearchField-CJR_PWL0.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-gFYtZqAt.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CoyWxoVa.js";import"./Form-CNo_OXXk.js";import"./Group-Cor_1PTD.js";import"./Input-Dtsuwq9P.js";import"./useTextField-gX6rH2pE.js";import"./useFormValidation-DhAPE9Wk.js";import"./TextField-CsqP2Q0r.js";import"./FieldDescription-Dnyf46T_.js";import"./Tooltip-BiTx2-UR.js";import"./ContextualHelpTrigger-YCFhHj29.js";import"./Heading-mkjIQ5vz.js";import"./Heading-C6yyDy0w.js";import"./useManagedValue-CKTufiVD.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},et={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
