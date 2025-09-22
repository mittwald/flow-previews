import{r as M,j as r}from"./iframe-Iz-jrQ83.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-Dxa-IEs4.js";import{L as P}from"./Label-BLFOHaT0.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BfqBRfyD.js";import{s as Y}from"./Action-Br1QCYBe.js";import{B as h}from"./Button-vOPcRaQ8.js";import{q as Z}from"./IconWarning-BfmxR99x.js";import{C as G}from"./CopyButton-DdT90464.js";import"./dynamic-Bo4plrg9.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./clsx-B-dksMZM.js";import"./FieldError-7b0XYa9_.js";import"./utils-Dydu0pBS.js";import"./Text-DcONEmQQ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Dc1Igsud.js";import"./Hidden-BljdK-_8.js";import"./useFocusRing-DSCSSA3t.js";import"./useFocus-p13hF2Sk.js";import"./TextField-DzXCHFtW.js";import"./Form-B2pzq79_.js";import"./useLabel-BXusGe9W.js";import"./Label-BK3HXmgw.js";import"./useTextField-c8k6OVAk.js";import"./useFormReset-Cl_PLqIc.js";import"./useControlledState-C1EOK33K.js";import"./useFocusable-D1JGAIsJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CRVd2q9t.js";import"./FieldDescription-CEUkGFJG.js";import"./Text-Dk41Q_nF.js";import"./browser-njf7oZ8k.js";import"./EmulatedBoldText-MtcJVW3r.js";import"./Tooltip-aj5531e9.js";import"./ClearPropsContextView-BFgHRwf1.js";import"./ProgressBar-xCJgXxXU.js";import"./context-BdTRL7oB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./ReactAriaControlledValueFix-B0uJRkpq.js";import"./ContextualHelpTrigger-B5MuAKL1.js";import"./Popover-BCO8-tV5.js";import"./DialogTriggerView-Ct4AgVLV.js";import"./context-DNlUm82J.js";import"./useStatic-D6VuC2u7.js";import"./Button-P11Hto4i.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CAUR_6bc.js";import"./RSPContexts-BeWSySSO.js";import"./FocusScope-BuNHZGqL.js";import"./useCollator-AyeBVjIE.js";import"./VisuallyHidden-BXR8MD6z.js";import"./Collection-Bghc4Zr_.js";import"./CollectionBuilder-CH12bxgH.js";import"./Separator-CTGwUbop.js";import"./SearchField-CsOWpSNr.js";import"./useEvent-CCByfuyl.js";import"./SelectionManager-DJ3uM6IO.js";import"./Heading-C6NSSN9v.js";import"./Heading-LjQ3pJ7P.js";import"./useManagedValue-Cdezhx4B.js";import"./getActionGroupSlot-DopO3qdD.js";import"./LoadingSpinner-BKi8wNla.js";import"./react-children-utilities-qXx-modQ.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,v;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var R,L,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,q,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
