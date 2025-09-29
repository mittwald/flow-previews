import{j as r}from"./iframe-BIwOddjN.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-DNMJ1XNo.js";import{L as m}from"./Link-AePDBOUr.js";import{H as s}from"./HeaderNavigation-DZPRhCaO.js";import{B as o}from"./Button-DVKpBB_-.js";import{T as p}from"./Text-3VIHsAGv.js";import{I as C}from"./Image-CB5w5PjM.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C4hdWQoA.js";import{b as y,C as A,M as c}from"./ContextMenuSection-BB_BekT5.js";import{a as D,M as E}from"./Modal-CrZWuK72.js";import{H as G}from"./Heading-Bnq9f_Vp.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./context-CbJ8Tawl.js";import"./utils-DPukZ4w7.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-4QX-FuAL.js";import"./useFocus-Cj2Pu7gn.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocusable-CxKBVkW3.js";import"./dynamic-copMXHk7.js";import"./LoadingSpinner-CG5b-Kig.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DDY6r886.js";import"./ProgressBar-CzA5dAYd.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./useLabel-DBHdatlR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";import"./Text-D1MRO4dn.js";import"./AlertIcon-CEV0HGaV.js";import"./Action-DaT8fcnF.js";import"./context-CorlgKQy.js";import"./useStatic-CAHKYPS0.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./Popover-BYGuuW82.js";import"./DialogTriggerView-D6nKQ5a7.js";import"./RSPContexts-CSo-c8h2.js";import"./ClearPropsContextView-CLESuCpt.js";import"./useControlledState-B4IhsBlg.js";import"./FocusScope-CDSFipnx.js";import"./useCollator-vh40vrkm.js";import"./VisuallyHidden-En5QTDR8.js";import"./Collection-YqThax3x.js";import"./CollectionBuilder-DWtnsQIQ.js";import"./context-Cplzyq73.js";import"./Separator-DroliD3e.js";import"./SelectionManager-CuYmYu-p.js";import"./useEvent-BngoJEfX.js";import"./Switch-Cz6oMetu.js";import"./Label-B4Iiqc5w.js";import"./useToggleState-Bpv2J7zI.js";import"./useFormReset-FXsWoN_h.js";import"./Overlay-CdKWiyMr.js";import"./ButtonView-BJikMrP9.js";import"./Heading-CXpceP0M.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
