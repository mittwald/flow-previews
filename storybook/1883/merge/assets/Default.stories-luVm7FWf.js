import{r as M,j as r}from"./iframe-DRWwRHPb.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-D9wrtDUb.js";import{L as P}from"./Label-DMZs6_dS.js";import{u as N,F as z,a as U}from"./Form-BZ4izQL_.js";import{s as Y}from"./Action-Bq2hQ8Bh.js";import{B as h}from"./Button-C17kQQYD.js";import{m as Z}from"./IconWarning-DhSonKOB.js";import{C as G}from"./CopyButton-DiYCbAsH.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-sbX835HY.js";import"./utils-9ciE-ZWz.js";import"./Text-XTosNzcc.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DyuuzcKr.js";import"./Hidden-CgY-Zzb9.js";import"./useFocusRing-DwMv-ywr.js";import"./useFocus-Cklz1p5-.js";import"./TextField-BHCgELYj.js";import"./Form-C-fYDZS9.js";import"./useLabel-C1sZK0NB.js";import"./Label-DWKl8ZCI.js";import"./useTextField-C4Pn4RsW.js";import"./useFormReset-XyyE6UJM.js";import"./useControlledState-BmVuB4nj.js";import"./useFocusable-CTYzjUzk.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BxgQBJxP.js";import"./FieldDescription-B8gji3F1.js";import"./Text-BIokAaTQ.js";import"./browser-ChcUEk5m.js";import"./EmulatedBoldText-w_oHSgVv.js";import"./Tooltip-Df-CZNl_.js";import"./OverlayArrow-CjAgqYv2.js";import"./ProgressBar-lrbeVblJ.js";import"./context-jL0Ioa3t.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./ReactAriaControlledValueFix-v2LYO4nG.js";import"./ContextualHelpTrigger-BSSMtpsq.js";import"./Popover-X0_ZzSYu.js";import"./DialogTriggerView-C6nRRnSY.js";import"./context-GwQ3zI17.js";import"./useStatic-u3WHDxzv.js";import"./Dialog-ImkhFy9O.js";import"./Button-BJEoKlME.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DZFGRV58.js";import"./RSPContexts-BIfyYgqP.js";import"./Collection-LSZw9Opa.js";import"./CollectionBuilder-DMMzaxy1.js";import"./Separator-Cq-Q8G1M.js";import"./SearchField-9TpmVPLK.js";import"./useEvent-D_icz2Dp.js";import"./SelectionManager-w9v-Ws39.js";import"./useCollator-CaT5c7qP.js";import"./FocusScope-hUGkKLjX.js";import"./VisuallyHidden-CJKgqKOh.js";import"./Heading-l2lCrlvX.js";import"./Heading-Bw-EY3jL.js";import"./getActionGroupSlot-C6b8pLJW.js";import"./LoadingSpinner-B_6uztW9.js";import"./react-children-utilities-DIr6PQ_f.js";import"./onlyText-DMtLJ7Db.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,W,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,_,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,ce as __namedExportsOrder,le as default};
