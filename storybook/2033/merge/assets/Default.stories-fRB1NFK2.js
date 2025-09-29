import{j as r}from"./iframe-JrijvI0G.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-B3U3_U2s.js";import{L as m}from"./Link-3TLUsjGm.js";import{H as s}from"./HeaderNavigation-D05niwwF.js";import{B as o}from"./Button-nOLp9HyP.js";import{T as p}from"./Text-9s7Vdafx.js";import{I as C}from"./Image-DX6LcYCE.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dd9-yoPg.js";import{b as y,C as A,M as c}from"./ContextMenuSection-B_Wuc4T7.js";import{a as D,M as E}from"./Modal-DIXnFPlB.js";import{H as G}from"./Heading-C_XHAp4M.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./context-CnkMg4nA.js";import"./utils-DhZkrhHH.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-JaoXEhrO.js";import"./useFocus-DA61-eEI.js";import"./useFocusRing-DCbTuOGO.js";import"./useFocusable-DIk21gkV.js";import"./dynamic-BUc0KwfX.js";import"./LoadingSpinner-BpDSxo2f.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bp13GR3E.js";import"./ProgressBar-D10mUZdz.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./useLabel-D5nQ4vXC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-eHAjn9uV.js";import"./EmulatedBoldText-BVZ71ko2.js";import"./Text-Bm8Zb_oa.js";import"./AlertIcon-BdSR7S12.js";import"./Action-CunTtwFt.js";import"./context-CS_K62PD.js";import"./useStatic-9jHtrOTK.js";import"./getActionGroupSlot-BuUDRoIK.js";import"./Popover-irUcUI-O.js";import"./DialogTriggerView-DOh3nc4_.js";import"./RSPContexts-bEimFc0k.js";import"./ClearPropsContextView-Dl_oHLSA.js";import"./useControlledState-DQPwS-UF.js";import"./FocusScope-Bwbpfbbo.js";import"./useCollator-ChdaOTfc.js";import"./VisuallyHidden-B4SYhrOy.js";import"./Collection-yP15xrib.js";import"./CollectionBuilder-CnCpguDd.js";import"./context-SLDg-fw2.js";import"./Separator-D6-9qD1D.js";import"./SelectionManager-C2kTlReE.js";import"./useEvent-BTKtfW_h.js";import"./Switch-BhTGOwor.js";import"./Label-BWdEIo8l.js";import"./useToggleState-CJGhq3Gn.js";import"./useFormReset-Bl0dawgu.js";import"./Overlay-BTMFOnNL.js";import"./ButtonView-XNSqWzM1.js";import"./Heading-BW0daRbe.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
