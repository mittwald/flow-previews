import{j as r}from"./iframe-Dyev7uqQ.js";import{a as p,u as c,F as u,t as C}from"./Form-Gu8_mx9R.js";import{L as d}from"./Label-DTUVPi2K.js";import{B as e}from"./Button-M1gfFqsi.js";import{S as T}from"./Section-BfDLZAnd.js";import{A as D}from"./ActionGroup-Cif2aV44.js";import{s as h}from"./Action-B4ax4ap7.js";import{S as O}from"./SearchField-DHyFAmkZ.js";import{d as q,O as g,P as B,n as o,r as E}from"./PasswordCreationField-DeAPj-5p.js";import{e as L}from"./isPromise-APPd_fLV-8tYzn7uh.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./browser-ChaPEiup.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./context-C27PnH24.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-B2iOgium.js";import"./Form-DM5JENEN.js";import"./Group-Bx2wIJZm.js";import"./Input-D9REckIy.js";import"./useTextField-B5EVwJKx.js";import"./useFormReset-CiUCuSgO.js";import"./useFormValidation-BpwVeG4s.js";import"./TextField-BaYoK8D6.js";import"./FieldDescription-B0vuMjWm.js";import"./Tooltip-D7lGfpNV.js";import"./ClearPropsContextView-C8RU8m_f.js";import"./ContextualHelpTrigger-gowqYZxy.js";import"./Popover-In9S8XGS.js";import"./useOverlayController-CxtZks11.js";import"./OverlayContextProvider-BeIBMLsK.js";import"./OverlayTrigger-C-oGjpLU.js";import"./ControlledNotification-HjFJ5Ljt.js";import"./Heading-D12aJeel.js";import"./Heading-StBQxI4O.js";import"./useManagedValue-BoQcIlRP.js";const V=(t=q)=>async i=>{if(!i)return!0;try{const n=await g.fromDeclaration(t).validate(i);return L(n.isValid)?await n.isValid:n.isValid}catch{return!1}},{action:_}=__STORYBOOK_MODULE_ACTIONS__,A=_("submit"),v={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[E.number],maxLength:2},{ruleType:o.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},st={title:"Integrations/React Hook Form/PasswordCreationField",component:p,render:()=>{const t=async n=>{await h(1e3),A(n)},i=c({defaultValues:{user:""}}),s=C();return r.jsx(u,{form:i,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(s,{name:"user",children:r.jsx(O,{children:r.jsx(d,{children:"Suche"})})}),r.jsx(D,{children:r.jsx(e,{type:"submit",children:"Submit"})})]})})}},a={},m={render:()=>{const t=c();return r.jsxs(u,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(p,{name:"text",rules:{required:!0},children:r.jsxs(B,{validationPolicy:v,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(e,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(e,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(e,{type:"submit",children:"Submit"})]})}},l={render:()=>{const t=g.fromDeclaration(v),i=c({defaultValues:{password:""}});return r.jsxs(u,{form:i,onSubmit:async s=>{await h(2e3),console.log("submitted",s)},children:[r.jsx(p,{rules:{required:!0,validate:V(t)},name:"password",children:r.jsxs(B,{validationPolicy:t,children:[r.jsx(d,{children:"Password"}),r.jsx(e,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(e,{onPress:()=>i.reset(),children:"Reset"}),r.jsx(e,{type:"submit",children:"Submit"})]})}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var P,b,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
