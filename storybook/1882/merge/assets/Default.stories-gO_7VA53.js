import{r as M,j as r}from"./iframe-B2KmHf-y.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DVDRUjDs.js";import{L as P}from"./Label-CEurSWF2.js";import{u as N,F as z,a as U}from"./Form-WvlmjZjk.js";import{s as Y}from"./Action-Cvpx0uN8.js";import{B as h}from"./Button-BbFeJzIv.js";import{m as Z}from"./IconWarning-BfZFkMSG.js";import{C as G}from"./CopyButton-B_yLpzAl.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DUJhKpS8.js";import"./utils-CGNLDjxu.js";import"./Text-BzjjTZNC.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BWIcWIx6.js";import"./Hidden-B8XFb6rR.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocus-BfYJCy_-.js";import"./TextField-qqPTWDF0.js";import"./Form-fpEywjGd.js";import"./useLabel-p5QRldAo.js";import"./Label-1elQ--Nx.js";import"./useTextField-kEXXX66E.js";import"./useFormReset-DxoPgNRk.js";import"./useControlledState-CjBtDVaa.js";import"./useFocusable-17jCqo4h.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Rn5jDQFX.js";import"./FieldDescription-BnvktwU2.js";import"./Text-BTzROJ4u.js";import"./browser-CAjTLwtK.js";import"./EmulatedBoldText-D4QqJqwf.js";import"./Tooltip-DGgaeMl9.js";import"./OverlayArrow-Bl6z6NHA.js";import"./ProgressBar-BuiHVKZg.js";import"./context-BMg6CKyL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./ReactAriaControlledValueFix-RoNrHbUR.js";import"./ContextualHelpTrigger-B2HKaJXm.js";import"./Popover-DNk_YqrN.js";import"./DialogTriggerView-CiCobVPa.js";import"./context-U_3b6bvq.js";import"./useStatic-CZG3tzpM.js";import"./Dialog-CNeQhTzc.js";import"./Button-DtifiV_Y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTR6VjFp.js";import"./RSPContexts-D8MVQLAj.js";import"./Collection-BwA2dvt3.js";import"./CollectionBuilder-BYnkarjY.js";import"./Separator-BMWcHxIk.js";import"./SearchField-C4xC6zLO.js";import"./useEvent-BZTmiYG1.js";import"./SelectionManager-D1JYq7To.js";import"./useCollator-kI-OIdrZ.js";import"./FocusScope-DhJvjcql.js";import"./VisuallyHidden-C6qwrwG6.js";import"./Heading-iOnu2cWd.js";import"./Heading-D_u-YVrE.js";import"./getActionGroupSlot-BF5Ft9wX.js";import"./LoadingSpinner-BqqlEuny.js";import"./react-children-utilities-CDiFsLVx.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const le=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,le as __namedExportsOrder,pe as default};
