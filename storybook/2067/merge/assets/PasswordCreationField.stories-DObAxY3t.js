import{j as r}from"./iframe-woTOwd7_.js";import{a as p,u as c,F as u,t as C}from"./Form-CDnbIgYI.js";import{L as d}from"./Label-BMPYi4BS.js";import{B as e}from"./Button-CqXZY3YI.js";import{S as T}from"./Section-Dn3mIjYv.js";import{A as D}from"./ActionGroup-DeD5Q09s.js";import{s as h}from"./Action-BlHQAv7W.js";import{S as O}from"./SearchField-DMs_tHBM.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-C1qzvEgk.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-C-nO0pE1.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./clsx-B-dksMZM.js";import"./index-C7RKIbtQ.js";import"./FieldError-cqKK9eum.js";import"./IconWarning-DjIAWUJ_.js";import"./FieldError-DhBue0La.js";import"./utils-D3yPsyL0.js";import"./Text-CI6uvf20.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./context-FI-dTyul.js";import"./browser-B4P6bty3.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./Text-BJYnGCYe.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./LoadingSpinner-CNqJtC-J.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ7HgVKa.js";import"./ProgressBar-utMpytcX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGvsG6co.js";import"./useFocus-BFXKtnCR.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./ContextMenuSection-C3ToUB4_.js";import"./Dialog-BSqtdg0s.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./VisuallyHidden-C2zuidlV.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./useStatic-DuP9qB1q.js";import"./context-BxwyR-58.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-Dqc8mqip.js";import"./Form-B8f020lP.js";import"./Group-BsSeV8DT.js";import"./Input-BBLm8t4P.js";import"./useTextField-ruai01e5.js";import"./useFormReset-DJCienz-.js";import"./useFormValidation-BteaOxt3.js";import"./TextField-C63YTa_x.js";import"./FieldDescription-BHmj1dCI.js";import"./Tooltip-DAQ3-VKl.js";import"./ClearPropsContextView-CjyS1sud.js";import"./ContextualHelpTrigger-DKC9jreG.js";import"./Popover-2tuG5vCS.js";import"./useOverlayController-OwJfwlq3.js";import"./OverlayContextProvider-CObjqvVa.js";import"./OverlayTrigger-CRF0Gc7N.js";import"./ControlledNotification-LitDRyiB.js";import"./Heading-C0FiA7i7.js";import"./Heading-BBFlLFGc.js";import"./useManagedValue-D-7TbSF4.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},st={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const nt=["Default","WithFocusAndError","WithForm"];export{a as Default,m as WithFocusAndError,l as WithForm,nt as __namedExportsOrder,st as default};
