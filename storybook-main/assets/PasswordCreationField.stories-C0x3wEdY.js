import{j as r}from"./iframe-F0_qnNmG.js";import{a as p,u as c,F as u,t as C}from"./Form-CFfDByC-.js";import{L as d}from"./Label-BW-f-a9z.js";import{B as e}from"./Button-6GY0aJmr.js";import{S as T}from"./Section-B3WAbWpL.js";import{A as D}from"./ActionGroup-BwHQ3W2X.js";import{s as h}from"./Action-rcgaEMhe.js";import{S as O}from"./SearchField-DhHU4fqO.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-BcH1l-70.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-Bv8wQ4eA.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./clsx-B-dksMZM.js";import"./index-Bz7U0goG.js";import"./FieldError-Cez4hVsO.js";import"./IconWarning-uipPPHio.js";import"./FieldError-Ba7AQt9l.js";import"./utils-sDrdBfYO.js";import"./Text-aPdZ_B4g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./context-BBFKgyN5.js";import"./browser-Cnb-FwPQ.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./Text-DO7iLNcc.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-vo1xOT6L.js";import"./ProgressBar-BhbNzFL_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./ContextMenuSection-CVTYXQHy.js";import"./Dialog-DaSdBBae.js";import"./RSPContexts-B8tkrJ5_.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useControlledState-DnVXKiKM.js";import"./Collection-Bb4E4fO1.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./context-DsS8yj4W.js";import"./Separator-CDhUdR2K.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./VisuallyHidden-BlAFGTlT.js";import"./getActionGroupSlot-C4q-hMJK.js";import"./useStatic-B-ONLx4H.js";import"./context-BzKhkjPO.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CEDZYJ47.js";import"./Form-Ca0x7b6g.js";import"./Group-z3D8wTQE.js";import"./Input-DMy6iJHZ.js";import"./useTextField-CkA_A7v3.js";import"./useFormReset-yESpD6TP.js";import"./useFormValidation-CO-DTcJJ.js";import"./TextField-ai3fCM35.js";import"./FieldDescription-Ib5hCrh-.js";import"./Tooltip-CbTAfVaF.js";import"./ClearPropsContextView-CdemR_HK.js";import"./ContextualHelpTrigger-BL-7tudi.js";import"./Popover-BDIZl1Ib.js";import"./useOverlayController-vUnIin05.js";import"./OverlayContextProvider-CAsE20_c.js";import"./OverlayTrigger-12_kL5Te.js";import"./ControlledNotification-Cm5zY1ql.js";import"./Heading-DUYmd3Yr.js";import"./Heading-CslUe0CH.js";import"./useManagedValue-CAx7Vz1H.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},st={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
