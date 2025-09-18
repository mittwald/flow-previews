import{r as M,j as r}from"./iframe-DUtcAVii.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-xg8LeGBm.js";import{L as P}from"./Label-D2FAkV6T.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-BhbXo5cm.js";import{s as Y}from"./Action-DkcWlbm8.js";import{B as h}from"./Button-DULuqu_l.js";import{q as Z}from"./IconWarning-BDc9REUs.js";import{C as G}from"./CopyButton-DtdIQ4hb.js";import"./dynamic-BPQY4zlZ.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./clsx-B-dksMZM.js";import"./FieldError-B_KU3Njk.js";import"./utils-BJK0bMVs.js";import"./Text-DD2-gbIJ.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-QAGn5nhU.js";import"./Hidden-nF8inpoX.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocus-BBGclxaJ.js";import"./TextField-w7amMjDR.js";import"./Form-pelauJUP.js";import"./useLabel-DY6IDqCz.js";import"./Label-Cx6s_AVf.js";import"./useTextField-rIWZAcfs.js";import"./useFormReset-CnZg8poR.js";import"./useControlledState-G4tJUSCb.js";import"./useFocusable-B2RmLQJm.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CldLJigO.js";import"./FieldDescription-CgOqQd8T.js";import"./Text-CIiZgPf0.js";import"./browser-TyqKNGpG.js";import"./EmulatedBoldText-DtNQdD50.js";import"./Tooltip-CgZvEmjl.js";import"./ClearPropsContextView-CAu383Hu.js";import"./ProgressBar-DzueJvvV.js";import"./context-DAjKPHt4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./ReactAriaControlledValueFix-CNNoItwk.js";import"./ContextualHelpTrigger-_ViBi2H1.js";import"./Popover-Bm-rwUXe.js";import"./DialogTriggerView-D0BwiIeE.js";import"./context-DAzA1DTj.js";import"./useStatic-BRK6B1ib.js";import"./Button-2XgEXCNC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DbIX1hOn.js";import"./RSPContexts-DD7I-zbI.js";import"./FocusScope-Bx_BpPkG.js";import"./useCollator-BJahqQL5.js";import"./VisuallyHidden-CsqdnZMW.js";import"./Collection-YnS658O_.js";import"./CollectionBuilder-ByXQf4MT.js";import"./Separator-DNulUYCD.js";import"./SearchField-6u-M9e2f.js";import"./useEvent-BWtfFYs6.js";import"./SelectionManager-DxFegUxo.js";import"./Heading-C0ULUb4N.js";import"./Heading-B2YReqBz.js";import"./useManagedValue-rY3vKTud.js";import"./getActionGroupSlot-CSj3Q-Jf.js";import"./LoadingSpinner-3c39ELf0.js";import"./react-children-utilities-DTc8dbtj.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
