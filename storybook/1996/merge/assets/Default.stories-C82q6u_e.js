import{r as M,j as r}from"./iframe-D6MXtoeF.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-CWHqIoQo.js";import{L as P}from"./Label-DskNCC55.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-CWVhtDGl.js";import{s as Y}from"./Action-BE7fSEbk.js";import{B as h}from"./Button-Cps8fs86.js";import{m as Z}from"./IconWarning-BzCByWga.js";import{C as G}from"./CopyButton-ceGl1nte.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DNUFoHGF.js";import"./utils-B7M3k9FN.js";import"./Text-X88WQLD_.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DIpddcx2.js";import"./Hidden-Cmo_PwmO.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocus-DFkM6utj.js";import"./TextField-D8-3KKgU.js";import"./Form-DWnjCikM.js";import"./useLabel-D8eXzRI6.js";import"./Label-BFW3y9SA.js";import"./useTextField-Ct6WOc7M.js";import"./useFormReset-a1QiC8fx.js";import"./useControlledState-CXEx0L1H.js";import"./useFocusable-mpne-nRN.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-y6YOgSXV.js";import"./FieldDescription-BnwEgjZt.js";import"./Text-BFMh0nyW.js";import"./browser-B8Nd9l3q.js";import"./EmulatedBoldText-238cra3f.js";import"./Tooltip-Enwu0eT5.js";import"./OverlayArrow-DzYaWuxq.js";import"./ProgressBar-bcTJnrQg.js";import"./context-Ck2zuvqd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./ReactAriaControlledValueFix-PNMAWQp-.js";import"./ContextualHelpTrigger-C_kKrSRG.js";import"./Popover-CAmf3Vp3.js";import"./DialogTriggerView-naeHwBCH.js";import"./context-0wOjLTza.js";import"./useStatic-BOJiZlFD.js";import"./Dialog-DTX65kLp.js";import"./Button-QOiUMIUW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Ct6Wvp4V.js";import"./RSPContexts-DRsXlI21.js";import"./Collection-Cv5VHUKE.js";import"./CollectionBuilder-C1kbEgCd.js";import"./Separator-DFJzdh8J.js";import"./SearchField-BsFidkN3.js";import"./useEvent-BvqgWnZ6.js";import"./SelectionManager-D5CRlMya.js";import"./useCollator-K4h4KKi7.js";import"./FocusScope-NXX1qwdY.js";import"./VisuallyHidden-B-VJ1Jd7.js";import"./Heading-DsViAiwO.js";import"./Heading-D9_UVGue.js";import"./useManagedValue-C1HQkvEj.js";import"./getActionGroupSlot-hiKhMcUy.js";import"./LoadingSpinner-BP-swr7r.js";import"./react-children-utilities-CSXI4m6v.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},ce={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{n as Default,m as Disabled,p as Required,u as WithCopyButton,c as WithCustomButtons,d as WithForm,l as WithPlaceholder,de as __namedExportsOrder,ce as default};
