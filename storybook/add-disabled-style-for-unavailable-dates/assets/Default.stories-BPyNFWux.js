import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BZISi7jw.js";import{F as t}from"./FileDropZone-C55ZH0ed.js";import{S as c}from"./Section-BvLtFQXY.js";import{F as d}from"./FileCardList-DTMIkECy.js";import{F as u}from"./FileCard-CAYwvptT.js";import{u as k,F as I,t as T}from"./Form-FpyCBsMG.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-wBfRci_n.js";import{A as w}from"./ActionGroup-CRCcp6EQ.js";import"./IconApp-DZf0STiH.js";import{i as x,j as W}from"./IconWarning-BqX4qer7.js";import{H as F}from"./Heading-CmQGQTPk.js";import{F as f}from"./FileField-CQaL1hfY.js";import{T as E}from"./Text-BPAvSiAh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-C7pOfmGL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./utils-BAtcVSHo.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CxIdO6ok.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./useFocus-B7LXpZ-i.js";import"./useCollator-CDl7pGf-.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./Button-DAivm4ks.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChNHSMR7.js";import"./useFocusRing-CYqHz5Aw.js";import"./useFocusable-XxrpiuTs.js";import"./VisuallyHidden-CfzjMNmM.js";import"./ContextMenuSection-vnKZrTgn.js";import"./Action-DdkAMDFz.js";import"./context-BWt75kQX.js";import"./useStatic-CZ_o1reA.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-CeuQjEkT.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BXcqMr2E.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-PYb9PIt4.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BNxR9rC7.js";import"./CollectionBuilder-BlZkV0U0.js";import"./Separator-xQlHCyu8.js";import"./SelectionManager-B6hW899S.js";import"./useEvent-0eO3yNkM.js";import"./FocusScope-BXsjqcwe.js";import"./ColumnLayout-BfIZms55.js";import"./Avatar-DABVibzv.js";import"./react-children-utilities-fm2cgFnI.js";import"./Image-cx1QRj6B.js";import"./Link-DpPNeacB.js";import"./Wrap-DQq6jo70.js";import"./FieldError-BeNnsonN.js";import"./FieldError-D8y9Veva.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./Heading-DmITIAYD.js";import"./Input-CxXkjS8B.js";import"./EmulatedBoldText-BfYT5ZHF.js";const er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},l={args:{accept:"image/png"},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},m={args:{multiple:!0},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const i=k(),n=T();return e.jsxs(I,{form:i,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...i.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,Z,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const rr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Multiple,l as WithAcceptedTypes,p as WithReactHookForm,rr as __namedExportsOrder,er as default};
