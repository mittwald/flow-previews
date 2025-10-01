import{j as r}from"./iframe-BdvCKsbF.js";import{a as p,u as c,F as u,t as C}from"./Form-C_oFPc-t.js";import{L as d}from"./Label-669hhtQM.js";import{B as e}from"./Button-CEcdxUV1.js";import{S as T}from"./Section-Jzko1FZT.js";import{A as D}from"./ActionGroup-8hqY-sJD.js";import{s as h}from"./Action-CY3HJwZy.js";import{S as O}from"./SearchField-BdLAXFPY.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-CvJucVt-.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-a4vM_yKz.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./clsx-B-dksMZM.js";import"./index-nNeao2-W.js";import"./FieldError-CdPfgsKF.js";import"./IconWarning-P52nLd_s.js";import"./FieldError-CxS3H1fm.js";import"./utils-BbupUKpI.js";import"./Text-C3C-Y4LW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./browser-1fV_VPE3.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./Text-JqEaJ00k.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./ContextMenuSection-BnE57rKt.js";import"./Dialog-CKgg94zq.js";import"./RSPContexts-Bh8BGw74.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useControlledState-DFl6XB3S.js";import"./Collection-BLnLf1sz.js";import"./CollectionBuilder-C6WQfqbB.js";import"./context-BhDiC0Wn.js";import"./Separator-CZgxguF8.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./useCollator-EaQty6uw.js";import"./FocusScope-pfm_0aY5.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./useStatic-PYikJUKS.js";import"./context-CCm7d4ti.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CFNSYYni.js";import"./Form-5t9tGa91.js";import"./Group-H81idT9-.js";import"./Input-i8756tn3.js";import"./useTextField-EmATntPl.js";import"./useFormReset-DGsTBoXq.js";import"./useFormValidation-CYJuvObN.js";import"./TextField-CuAhRXdh.js";import"./FieldDescription-CPNVxfRH.js";import"./Tooltip-DB4TIPCf.js";import"./ClearPropsContextView-Cu9Qi4Nq.js";import"./ContextualHelpTrigger-BDKor5HI.js";import"./Popover-DIMVCCn2.js";import"./useOverlayController-Ot3Ai6Bn.js";import"./OverlayContextProvider-DLByYP72.js";import"./OverlayTrigger-COQc48B1.js";import"./ControlledNotification-FezNhtwt.js";import"./Heading-DMBcew2u.js";import"./Heading-av54CM7K.js";import"./useManagedValue-CWGiHn9y.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},st={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
