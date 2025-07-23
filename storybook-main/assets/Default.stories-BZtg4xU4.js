import{r as A,j as r}from"./iframe-Dg6UnhUn.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField--9OdU3Dx.js";import{L as h}from"./Label-CHnnbTob.js";import{u as z,F as U,a as Y}from"./Form-CT-gnejl.js";import{s as Z}from"./Action-dC4eDzAP.js";import{B as u}from"./Button-B-eL7j03.js";import{m as $}from"./IconWarning-CALSlVTn.js";import{C as k}from"./CopyButton-DdnsDnvJ.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CQt-JA7i.js";import"./utils-CHKT5qD6.js";import"./Text-5OPT84ek.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-BGz2zD2A.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocus-DIqzHvRL.js";import"./Input-BLPNs6ud.js";import"./Hidden-D5q0FBhK.js";import"./TextField-nXryNZh-.js";import"./Form-Dab95gIe.js";import"./useLabel-CSavvckB.js";import"./Label-CLbvuqlx.js";import"./useTextField-D74XjgWw.js";import"./useFormReset-B8_ofs8-.js";import"./useControlledState-BEdG5TcY.js";import"./useFocusable-ByYZ8WRR.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DgATZJMg.js";import"./FieldDescription--Vv-bNd2.js";import"./Text-Da0TnBkn.js";import"./browser-BdsZB4yy.js";import"./EmulatedBoldText-BNa7EikO.js";import"./Tooltip-srEQxl7E.js";import"./OverlayArrow-CkPauhq3.js";import"./ProgressBar-B038sK4e.js";import"./context-Ddln_640.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./ReactAriaControlledValueFix-C4EOfDg3.js";import"./ContextualHelpTrigger-CE-0jb3G.js";import"./Popover-D-cq4Rkq.js";import"./DialogTriggerView-CrN-7tsJ.js";import"./context--SRER2Sj.js";import"./useStatic-VLWdu29U.js";import"./Dialog-C4HUGQZW.js";import"./Button-D1qjIKes.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRsXmFdU.js";import"./RSPContexts-BHb0qNd1.js";import"./Collection-BnM07wE2.js";import"./CollectionBuilder-Cj569hxd.js";import"./Separator-DqyAZ2vf.js";import"./SearchField-Zy5PsrMr.js";import"./SelectionManager-xbG5JbjP.js";import"./useEvent-CUClqzP3.js";import"./useCollator-DFQLuckx.js";import"./FocusScope-DgFR_sU-.js";import"./VisuallyHidden-BBKGK1WU.js";import"./Heading-BTnSvh57.js";import"./Heading-cOX3uo3b.js";import"./getActionGroupSlot-DqWqADF-.js";import"./LoadingSpinner-BkZqXqCL.js";import"./react-children-utilities-icDmxffX.js";import"./onlyText-DpGCYwLC.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,W,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,O,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,de as default};
