import{j as r}from"./iframe-CRCn_1k8.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-DfyJ3u1O.js";import{L as m}from"./Link-CTOLZ8dB.js";import{H as s}from"./HeaderNavigation-BC72uM--.js";import{B as o}from"./Button-BVbQUaZI.js";import{T as p}from"./Text-DcU8-VYF.js";import{I as C}from"./Image-DUWIn9JQ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CggFEefv.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BLdvRM7S.js";import"./ContextMenuSection-DZ1YudgL.js";import{a as D,M as G}from"./Modal-DkS8vqRL.js";import{H as E}from"./Heading-EsjzmIKn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BubU3Kz3.js";import"./mergeRefs-Gw2OcT6Q.js";import"./index-7hVsDhMa.js";import"./useLocalizedStringFormatter-DT9CXOan.js";import"./context-fzWZoyLv.js";import"./utils-BI2kd8b-.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CPRYRx8p.js";import"./useFocus-B3vm1A24.js";import"./useFocusRing-CAd7IlbP.js";import"./useFocusable-BJ6918Tp.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DMa7-rPQ.js";import"./Button-DC_FOGfE.js";import"./ProgressBar-CqTE0rEm.js";import"./Label-DuoAXWP0.js";import"./Hidden-860WeEVo.js";import"./useLabel-76mwt2Hf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1ctrq8_.js";import"./EmulatedBoldText-YLFM-K80.js";import"./Text-CnPg80ig.js";import"./AlertIcon-DFFwW_xI.js";import"./Action-DUoIh7jH.js";import"./context-BrbDjT5a.js";import"./useStatic-coyUivo9.js";import"./getActionGroupSlot-QXW-CFJF.js";import"./Popover-DPuqnpVW.js";import"./DialogTriggerView-D7FvFq3-.js";import"./Dialog-1-lFH5mz.js";import"./RSPContexts-C8n8IA5U.js";import"./OverlayArrow-CtMzTmFy.js";import"./useControlledState-gjMGbt2_.js";import"./Collection-BXQIElN8.js";import"./CollectionBuilder-DKleWLkr.js";import"./Separator-C4pDfZY6.js";import"./Group-D1x-PT5o.js";import"./SearchField-sAGmdzL3.js";import"./FieldError-Get8RxYf.js";import"./Form-BUDb6yDR.js";import"./useTextField-BRTDaWoE.js";import"./useFormReset-DT5J9yBd.js";import"./TextField-BUKK7PKt.js";import"./useEvent-BjeIZ3GR.js";import"./SelectionManager-gdTsuSpq.js";import"./useCollator-CSlC2lAk.js";import"./FocusScope-B7tfNpBC.js";import"./VisuallyHidden-4OPl2Xdl.js";import"./Switch-DcWep-eE.js";import"./Label-CTLOVe14.js";import"./useToggleState-CfL6VMBt.js";import"./Overlay-ClCdoXWx.js";import"./Header-D7g8JGZq.js";import"./ButtonView-BFvxxGTy.js";import"./Heading-CTGaAvvp.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
