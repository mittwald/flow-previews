import{r as E,j as r}from"./iframe-tng_7MnI.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-BPeyHPjQ.js";import{L as h}from"./Label-Dv5kr7I4.js";import{u as M,F as N,a as z}from"./Form-DslsN0O-.js";import{s as U}from"./Action-DpGM30Ow.js";import{B as u}from"./Button-DU_QW8Rd.js";import{m as Y}from"./IconWarning-BPmu7WCe.js";import{C as Z}from"./CopyButton-or0JM3wp.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DYaGdwvi.js";import"./utils-5hQd1GPy.js";import"./Text-CW9rRGi5.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-7jupwvb6.js";import"./useFocusRing-DhOBCV_L.js";import"./useFocus-DB2yX2jm.js";import"./Input-X3v1cPFB.js";import"./Hidden-DtL8MOne.js";import"./TextField-iYZH2OXM.js";import"./Form-DwsjCjtf.js";import"./useLabel-Xo2bW3MF.js";import"./Label-CUv_itT5.js";import"./useTextField--Fxttb5L.js";import"./useFormReset-xJzqPhqW.js";import"./useControlledState-BUDKzFUA.js";import"./useFocusable-DouN-Cym.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DfzpSzZW.js";import"./FieldDescription-D_eJZryM.js";import"./Text-D_jDO6uI.js";import"./browser-zPD-OImI.js";import"./EmulatedBoldText-d-Lx_bwT.js";import"./Tooltip-DCoZNoqJ.js";import"./OverlayArrow-D1J4V4Xu.js";import"./ProgressBar-BKGN512w.js";import"./context-DF7MMgfI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./ReactAriaControlledValueFix-BXQiwHMq.js";import"./context-t97AZKNB.js";import"./useStatic-Vj9I4teO.js";import"./ContextualHelpTrigger-BzYwv0Hg.js";import"./Popover-BJU7ttZm.js";import"./DialogTriggerView-CRs3bhJy.js";import"./Dialog-IOGvswXh.js";import"./Button-BAFArKRX.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-GMQejvE6.js";import"./RSPContexts-B53Ismbm.js";import"./Collection-U6iOHpYg.js";import"./CollectionBuilder-Bvhqn8Ns.js";import"./Separator-mXU6o4ZK.js";import"./SearchField-BOUVMF0K.js";import"./SelectionManager-Ci6gTmLN.js";import"./useEvent-CP-X5b9K.js";import"./useCollator-B2nuGa8V.js";import"./FocusScope-DGiBHAPP.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./Heading-g6boEUQI.js";import"./Heading-k2W8L45n.js";import"./getActionGroupSlot-jEh-tcyT.js";import"./LoadingSpinner-DVPPG5kf.js";import"./react-children-utilities-CeO_6e5_.js";import"./onlyText-Bdi5hKMi.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,le as default};
