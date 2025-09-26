import{r as M,j as r}from"./iframe-DkzCwCX4.js";import{d as k,O as I,P as i,n as t,r as A}from"./PasswordCreationField-DnxgYxI4.js";import{L as P}from"./Label-BxAVz1UC.js";import{e as K}from"./chunk-PULGOXDA-8tYzn7uh.js";import{u as N,F as z,a as U}from"./Form-Dq-LmidO.js";import{s as Y}from"./Action-waCXg2Hq.js";import{B as h}from"./Button-BnlekXC3.js";import{q as Z}from"./IconWarning-DW3eva0Y.js";import{C as G}from"./CopyButton-Bfd8TK0n.js";import"./dynamic-BbyFekY5.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./clsx-B-dksMZM.js";import"./FieldError-Jo1S5986.js";import"./utils-CLIXtwVU.js";import"./Text-lQk_ytCv.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-0pV7udqg.js";import"./Hidden-Co6TepXZ.js";import"./useFocusRing-D8oCWed-.js";import"./useFocus-ib9l0UKV.js";import"./TextField-DIeR-UPB.js";import"./Form-Bd46is8r.js";import"./useLabel-BJPqeoy6.js";import"./Label-CxXDsSed.js";import"./useTextField-DDEFSut-.js";import"./useFormReset-Dtav30sm.js";import"./useControlledState-BOJEDAaV.js";import"./useFocusable-DGleC9_O.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-ZxrKxv-k.js";import"./FieldDescription-CBKqvqxl.js";import"./Text-nAHNspGp.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";import"./Tooltip-BA0T6AIN.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./ProgressBar-BPpVJdpP.js";import"./context-R4HBJhIj.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./ReactAriaControlledValueFix-Bp1vPYDx.js";import"./ContextualHelpTrigger-BMGkZi7j.js";import"./Popover-DLWa551b.js";import"./DialogTriggerView-C0Uk_5SJ.js";import"./context-C3VhVMcy.js";import"./useStatic-DPeMNtEl.js";import"./Button-BmtE6ca-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bo4yNuZG.js";import"./RSPContexts-ypxcCxo7.js";import"./FocusScope-DTdzqE55.js";import"./useCollator-CJfXA3qY.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Collection-DoEHjGcH.js";import"./CollectionBuilder-BePk8bko.js";import"./Separator-uSA5LFxj.js";import"./SearchField-Cdw14afw.js";import"./useEvent-D_rPsZtc.js";import"./SelectionManager-Dg3ay1FE.js";import"./Heading-BRlbbFpw.js";import"./Heading-CMyU0Jt0.js";import"./useManagedValue-CeGpj0UL.js";import"./getActionGroupSlot-OrHKCra6.js";import"./LoadingSpinner-CQddXTjo.js";import"./react-children-utilities-wnwBlo7x.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return K(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[A.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
