import{r as M,j as r}from"./iframe-BN_dfUe_.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BsL7sDgs.js";import{L as P}from"./Label-BSR54Ews.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BJAYt6qk.js";import{s as Y}from"./Action-V_TKCgSi.js";import{B as h}from"./Button-D-C47sqm.js";import{q as Z}from"./IconWarning-DNOLg4j3.js";import{C as G}from"./CopyButton-CMcucSo6.js";import"./dynamic-BgZcYaB5.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./clsx-B-dksMZM.js";import"./FieldError-CIdDbIOg.js";import"./utils-B0sx3Kyr.js";import"./Text-Bh7wF6OD.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BVQ5MOmY.js";import"./Hidden-DymlCD5P.js";import"./useFocusRing-BbyZkAky.js";import"./useFocus-BPnQl8Vs.js";import"./TextField-BdrHFS2A.js";import"./Form-BI9DTP98.js";import"./useLabel-BVHoyGPi.js";import"./Label-DGLQk8oX.js";import"./useTextField-BYi7xCqf.js";import"./useFormReset-DQe0b_9O.js";import"./useControlledState-B3OMKOuD.js";import"./useFocusable-CjxkNo9x.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DsWJyZ3N.js";import"./FieldDescription-BxF3CDXG.js";import"./Text-DzaqmzRj.js";import"./browser-BV7EqxDV.js";import"./EmulatedBoldText-D3DsYnee.js";import"./Tooltip-Bq7SpaXg.js";import"./ClearPropsContextView-DP5aaG59.js";import"./ProgressBar-jBCVtiFi.js";import"./context-dredv6-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./ReactAriaControlledValueFix-CA8VJDTf.js";import"./ContextualHelpTrigger-Bc8To7PB.js";import"./Popover-DLER5_Cb.js";import"./DialogTriggerView-nA9ebbIS.js";import"./context-DRf69qys.js";import"./useStatic-wsYo6cwd.js";import"./Button-Df2sUXty.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D00Qk3ID.js";import"./RSPContexts-D2tN5T2G.js";import"./FocusScope-DSvKVwGk.js";import"./useCollator-D4KmbgCM.js";import"./VisuallyHidden-Cv7STolA.js";import"./Collection-BYc3dnT8.js";import"./CollectionBuilder-Eq-dAbBR.js";import"./Separator-DJTsPnLp.js";import"./SearchField-BBPaTZKc.js";import"./useEvent-BzG6iyzN.js";import"./SelectionManager-Bc25mfga.js";import"./Heading-C3bMpqRe.js";import"./Heading-BXZxzqvc.js";import"./useManagedValue-Bw1_uCWQ.js";import"./getActionGroupSlot-BHB3McHc.js";import"./LoadingSpinner-BajA46At.js";import"./react-children-utilities-D5LF6eI0.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
