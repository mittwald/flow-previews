import{j as r}from"./iframe-oDnSRKrU.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-BDchKd2I.js";import{L as m}from"./Link-CI3oVvQy.js";import{H as s}from"./HeaderNavigation-CyBVuc-8.js";import{B as o}from"./Button-Cfj_belE.js";import{T as p}from"./Text-BRg3dDEW.js";import{I as C}from"./Image-DZ1YtSxB.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CO2TlZgH.js";import{b as y,C as A,M as c}from"./ContextMenuSection-ivUXKKhV.js";import{a as D,M as E}from"./Modal-DUG1J1-U.js";import{H as G}from"./Heading-XUur3sa-.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./context-BACVj_LI.js";import"./utils-BOFgiu6B.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BlfeWo8-.js";import"./useFocus-CBAj8SSC.js";import"./useFocusRing-BvVC0KGc.js";import"./useFocusable-BIMsrSRy.js";import"./dynamic-B66wdgIv.js";import"./LoadingSpinner-DjOmL5Rt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D46_pkFx.js";import"./ProgressBar-BuCs3ZnW.js";import"./Label-pm9yE2cO.js";import"./Hidden-B7YQi_X1.js";import"./useLabel-IKTU3VFM.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B1IGKoaP.js";import"./EmulatedBoldText-EQ8sxSlk.js";import"./Text-BhCBXCIE.js";import"./AlertIcon-BTQvyS_h.js";import"./Action-BMGnqQDt.js";import"./context-BfF8CEMr.js";import"./useStatic-B5fiOOMU.js";import"./getActionGroupSlot-DD5xlWbQ.js";import"./Popover-BAr3bKt4.js";import"./DialogTriggerView-Ce3L8qPr.js";import"./RSPContexts-wR3TIPq6.js";import"./ClearPropsContextView-C5KU2xgH.js";import"./useControlledState-C4SjqBt9.js";import"./FocusScope-CFc2lXVF.js";import"./useCollator-BUiMLO_A.js";import"./VisuallyHidden-D8Dskj69.js";import"./Collection-B4_H5DyP.js";import"./CollectionBuilder-BqrWk4D3.js";import"./context-D1pfjzoG.js";import"./Separator-DoYImFmL.js";import"./SelectionManager-D05r5y9b.js";import"./useEvent-DUbYFqCh.js";import"./Switch-CmESvRX8.js";import"./Label-DdcSy8o6.js";import"./useToggleState-9AVyzi3E.js";import"./useFormReset-m0r5jrEx.js";import"./Overlay-DPw2jtas.js";import"./ButtonView-BYrsyY3Q.js";import"./Heading-m29PahKq.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
