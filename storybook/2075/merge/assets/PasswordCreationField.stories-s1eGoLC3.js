import{j as r}from"./iframe-D3XbVUAE.js";import{a as p,u as c,F as u,t as C}from"./Form-C5MCGQf3.js";import{L as d}from"./Label-BTIrFf4y.js";import{B as e}from"./Button-DI43yX0M.js";import{S as T}from"./Section-BUZrj2S6.js";import{A as D}from"./ActionGroup-F8VITapX.js";import{s as h}from"./Action-CZBfRLDN.js";import{S as O}from"./SearchField-CwOY1_UW.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-fjXAUCjN.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-GIq4BKTG.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./clsx-B-dksMZM.js";import"./index-BE_iNncf.js";import"./FieldError-DuGPuZu9.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./utils-BWY6h_sn.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./browser-DZQtGRWw.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./EmulatedBoldText-C38wPnte.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./useStatic-B8Xkh7jF.js";import"./context-Do4klyfP.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-D1VqbsXd.js";import"./Form-CcsDzmFP.js";import"./Group-BPkRhbu5.js";import"./Input-CNAwbAUs.js";import"./useTextField-BMKAR3PL.js";import"./useFormReset-BLKvBmEx.js";import"./useFormValidation-Co07oj9m.js";import"./TextField-COqQTs2q.js";import"./FieldDescription-CCF4pGSH.js";import"./Tooltip-Drxa9aKR.js";import"./ClearPropsContextView-Ck5uY1-8.js";import"./ContextualHelpTrigger-DXy1mm-U.js";import"./Popover-C3EPav8D.js";import"./useOverlayController-DFrmP01N.js";import"./OverlayContextProvider-DEtRDXPF.js";import"./OverlayTrigger-CzfFaC6q.js";import"./ControlledNotification-GK4LrAeo.js";import"./Heading-BRhqG7uw.js";import"./Heading-C9v1QtIG.js";import"./useManagedValue-aUKzl9Jg.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},st={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
