import{j as e,r as O}from"./iframe-Bgax2JY0.js";import{L as s}from"./Label-_IXUlREC.js";import{F as o}from"./FileField-B2VHWNP5.js";import{B as t}from"./Button-DorhvjcK.js";import{S as A}from"./Section-Cm0021MO.js";import{F as H}from"./FieldError-BFdd7cAt.js";import{F as P}from"./FieldDescription-0zymrVHp.js";import{K as R,_ as G}from"./IconWarning-CIEL4Pty.js";import{u as U,F as k,t as q}from"./Form-CkeGbjTN.js";import{A as w}from"./ActionGroup-9NgnkgRF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CmOrLwYQ.js";import"./mergeRefs-1LV-M9lp.js";import"./index-B-5I2LyG.js";import"./useLocalizedStringFormatter-uMxvRbqB.js";import"./context-Bb8mc0Vr.js";import"./Label-qLOfPpHT.js";import"./utils-DhvHJ7nc.js";import"./Hidden-DMxEzFkJ.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CqpGTvbl.js";import"./useFocus-Bodxhf8B.js";import"./useLabel-tzcBKB-Q.js";import"./FieldError-DcSiOcsV.js";import"./Text-BnSb9DeM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-YM833BDX.js";import"./useFocusRing-DcvKFQyA.js";import"./browser-CNVsKzoy.js";import"./Text-D6HIqkzL.js";import"./EmulatedBoldText-CcxcoryL.js";import"./LoadingSpinner-Bv666wXE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DgAfNMgE.js";import"./ProgressBar-CZQ_VFpR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g-wt-ENC.js";import"./useFocusable-Bp4ESZkx.js";import"./ContextMenuSection-DGFiszVN.js";import"./Action-BPNog73Z.js";import"./context-CPunWrMu.js";import"./useStatic-DXnsBsC9.js";import"./getActionGroupSlot-dcXhdsbk.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BurARqGL.js";import"./RSPContexts-P0zhp91u.js";import"./OverlayArrow-CYHIASrt.js";import"./useControlledState-ac1T2b60.js";import"./Collection-Dtx_2tJr.js";import"./CollectionBuilder-D9WqczC4.js";import"./Separator-DIslfa6e.js";import"./SearchField-kAL_jkdT.js";import"./useTextField-B7zXE9Jf.js";import"./useFormReset-CYQ4wC1P.js";import"./TextField-CBK-xjEz.js";import"./useEvent-BaDyCPVa.js";import"./SelectionManager-CESmDrfy.js";import"./useCollator-DvCxePvq.js";import"./FocusScope-BkaPqd68.js";import"./VisuallyHidden-Dl-5RC8j.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,B,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,D,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
