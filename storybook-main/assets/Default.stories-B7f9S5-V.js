import{r as M,j as r}from"./iframe-CqlVwSqw.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-BwMfAQih.js";import{L as P}from"./Label-WgiBu-Dj.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-C_Odkr89.js";import{s as Y}from"./Action-BP4V_Ghr.js";import{B as h}from"./Button-OTaF8oie.js";import{q as Z}from"./IconWarning-CQ60jK8P.js";import{C as G}from"./CopyButton-kgaaKu07.js";import"./dynamic-BWXPpint.js";import"./PropsContextProvider-BuREg09C.js";import"./mergeRefs-Cx0s-cU7.js";import"./index-BuKaDIt4.js";import"./clsx-B-dksMZM.js";import"./FieldError-CjaQ5IB_.js";import"./utils-B7PoWZoE.js";import"./Text-BcRGqQ7g.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DKePUrRV.js";import"./Hidden-tYtqWYMe.js";import"./useFocusRing-DLxcniMF.js";import"./useFocus-qWrFSXYF.js";import"./TextField-BmXGUsbn.js";import"./Form-Ce3Yvr6A.js";import"./useLabel-B6FfxehJ.js";import"./Label-CpU_ziWP.js";import"./useTextField-g_oQkODH.js";import"./useFormReset-DOLEs5qD.js";import"./useControlledState-DZt2Tj7Y.js";import"./useFocusable-BReVx9rr.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Cyj__5dL.js";import"./FieldDescription-DeDryt5w.js";import"./Text-CQKhljzJ.js";import"./browser-D8TCc1uG.js";import"./EmulatedBoldText-C871-J_1.js";import"./Tooltip-DfqVeZis.js";import"./ClearPropsContextView-C3Bv20Xw.js";import"./ProgressBar-B0gZeOOM.js";import"./context-QfY8Pr6d.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BiVzy_IK.js";import"./ReactAriaControlledValueFix-DILG8OeD.js";import"./ContextualHelpTrigger-DWSpkLhP.js";import"./Popover-BBrX7Bk6.js";import"./DialogTriggerView-BZ0wf3vM.js";import"./context-CxE1sBmK.js";import"./useStatic-BR1_jZPV.js";import"./Button-2nj66ItS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-5TW4P5t1.js";import"./RSPContexts-C439z8nI.js";import"./FocusScope-Bgk9tnAX.js";import"./useCollator-CpH_e3F2.js";import"./VisuallyHidden-leZhq3qV.js";import"./Collection-DMTTSBS8.js";import"./CollectionBuilder-EuTbufj2.js";import"./Separator-PuUe3HZt.js";import"./SearchField-C2GAQJuB.js";import"./useEvent-Bpofckl7.js";import"./SelectionManager-BUQAScfd.js";import"./Heading-DgHdlda3.js";import"./Heading-Derm1hNn.js";import"./useManagedValue-C5d-cc0S.js";import"./getActionGroupSlot-DdOlkyEE.js";import"./LoadingSpinner-3xwEonu_.js";import"./react-children-utilities-BMayZTp2.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
