import{r as M,j as r}from"./iframe-CRsb57af.js";import{d as k,O as I,e as A,P as i,n as t,r as K}from"./PasswordCreationField-DYe2klPJ.js";import{L as P}from"./Label-sr3fNKeT.js";import{u as N,F as z,a as U}from"./Form-4WviLq8T.js";import{s as Y}from"./Action-CddrIjFT.js";import{B as h}from"./Button-c2AsubDx.js";import{m as Z}from"./IconWarning-CcDYRP7s.js";import{C as G}from"./CopyButton-Bl09NUgV.js";import"./PropsContextProvider-BR4-1agz.js";import"./mergeRefs-DplnSgkI.js";import"./index-CuZmym5e.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B33IY45p.js";import"./utils-CwotMdLX.js";import"./Text-Dc62rOGI.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BRcAYOXB.js";import"./Hidden-CvrWtM-J.js";import"./useFocusRing-UHNYZFwC.js";import"./useFocus-DbNAjYIm.js";import"./TextField-CrxNrIk9.js";import"./Form-DcCFXF0q.js";import"./useLabel-CtSNSJe6.js";import"./Label-ePem4EPa.js";import"./useTextField-DakxfzUT.js";import"./useFormReset-Dz46-Gvc.js";import"./useControlledState-DgD7b91N.js";import"./useFocusable-YH2tkZSf.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bqe2SFUH.js";import"./FieldDescription-BsSNlfA2.js";import"./Text-BeV7pvCv.js";import"./browser-KjD5DeSR.js";import"./EmulatedBoldText-LP_9OJ0Q.js";import"./Tooltip-DZzKB8mH.js";import"./OverlayArrow-CXvzgL8W.js";import"./ProgressBar-B7_oEUBN.js";import"./context-DoWLFUeS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BRTflqfT.js";import"./ReactAriaControlledValueFix-BCa7HjQH.js";import"./ContextualHelpTrigger-DJ9JtqId.js";import"./Popover-Bdy4v_RX.js";import"./DialogTriggerView-DbRMXRJO.js";import"./context-q8TPx0Dl.js";import"./useStatic-l_ZOo8Ze.js";import"./Dialog-J7-PabLc.js";import"./Button-kIpzmIw-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBBuz-CW.js";import"./RSPContexts-BEiHDPhP.js";import"./Collection-BmFAT2ID.js";import"./CollectionBuilder-CTW40qd5.js";import"./Separator-Be5OBuwC.js";import"./SearchField-Dc_y5Vr7.js";import"./useEvent-DYe7cJIX.js";import"./SelectionManager-vl9_ChBd.js";import"./useCollator-BqnPvmV5.js";import"./FocusScope-B2MzAavW.js";import"./VisuallyHidden-zV1rhxGD.js";import"./Heading-CqJETH-v.js";import"./Heading-gDp1ohs1.js";import"./getActionGroupSlot-DOvThARP.js";import"./LoadingSpinner-BbraRPFj.js";import"./react-children-utilities-BMpia36P.js";const H=(e=k)=>async o=>{if(!o)return!0;try{const a=await I.fromDeclaration(e).validate(o);return A(a.isValid)?await a.isValid:a.isValid}catch{return!1}},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[K.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},pe={title:"Form Controls/PasswordCreationField",component:i,render:e=>{const[o,s]=M.useState("");return r.jsx(i,{value:o,onValidationResult:w("onValidationResult"),onChange:a=>{w("onChange"),s(a)},...e,children:r.jsx(P,{children:"Password"})})}},n={},m={args:{isDisabled:!0}},p={args:{isRequired:!0}},l={args:{placeholder:"helloMoto"}},c={render:e=>r.jsxs(i,{...e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=I.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async s=>{await Y(2e3),console.log("submitted",s)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(i,{validationPolicy:e,children:[r.jsx(P,{children:"Password"}),r.jsx(h,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(h,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(h,{type:"submit",children:"Submit"})]})}},u={render:e=>{const[o,s]=M.useState("");return r.jsxs(i,{onChange:a=>s(a),...e,children:[r.jsx(P,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,y,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
