import{r as M,j as r}from"./iframe-yblUafAy.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-B0xbcKmq.js";import{L as P}from"./Label-8SxsrgrD.js";import{u as N,F as z,a as U}from"./Form-DBrbqSjb.js";import{s as Y}from"./Action-kq5ASvWE.js";import{B as h}from"./Button-D2p8-L8R.js";import{m as Z}from"./IconWarning-FTunGjDP.js";import{C as G}from"./CopyButton-By-i85Y9.js";import"./PropsContextProvider-B8EIY1Jj.js";import"./mergeRefs-DPuRbqjH.js";import"./index-DA6b7LJX.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Ct0jDKO_.js";import"./utils-Cuf_iXmO.js";import"./Text-DWcsfeqF.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-kAvMkrn8.js";import"./Hidden-C5uXlRoq.js";import"./useFocusRing-BEFChVB0.js";import"./useFocus-BRMNIepO.js";import"./TextField-BJiBvQru.js";import"./Form-DT2Igymc.js";import"./useLabel-DopEiXYz.js";import"./Label-g9pCZyAY.js";import"./useTextField-ByVXoEs-.js";import"./useFormReset-BYGEl6Av.js";import"./useControlledState-DwQ-hYmo.js";import"./useFocusable-BbfkEIfW.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CztPiJpG.js";import"./FieldDescription-CdDSTKj2.js";import"./Text-Bue8FNqz.js";import"./browser-B_6hcHr6.js";import"./EmulatedBoldText-FggCtMpU.js";import"./Tooltip-D8dWV8lZ.js";import"./OverlayArrow-Dvm2kmG0.js";import"./ProgressBar-p6bTWqPO.js";import"./context-DmpjBdtt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DLiSbhJn.js";import"./ReactAriaControlledValueFix-Vz9Hdu8U.js";import"./ContextualHelpTrigger-Cj-MYGGa.js";import"./Popover-BTOGgCa7.js";import"./DialogTriggerView-ChCW7gG4.js";import"./context-BkC5jRlB.js";import"./useStatic-73QSveBS.js";import"./Dialog-DycU1Q-J.js";import"./Button-Zp10QsFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-io38-WAj.js";import"./RSPContexts-D2F1j_VZ.js";import"./Collection-CsnkEDh_.js";import"./CollectionBuilder-Bu8NYt0R.js";import"./Separator-DEwk_MDL.js";import"./SearchField-cM2IEerl.js";import"./useEvent-C69ifmQP.js";import"./SelectionManager-B7efpdFx.js";import"./useCollator-CBzKX_g0.js";import"./FocusScope-Cc14swpk.js";import"./VisuallyHidden-iXpVyW0k.js";import"./Heading-DXeuEdn1.js";import"./Heading-CCkmSZ_4.js";import"./getActionGroupSlot-C5sNvxIx.js";import"./LoadingSpinner-Y4JEbMCH.js";import"./react-children-utilities-Uw6oSvOI.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
