import{j as r}from"./iframe-lUo2nGnz.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-BtoswtWr.js";import{L as m}from"./Link-DEnOzgy5.js";import{H as s}from"./HeaderNavigation-CbZXuShp.js";import{B as o}from"./Button-BJSwvuxb.js";import{T as p}from"./Text-BGPM5sar.js";import{I as C}from"./Image-BpxrXwHS.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CvVn2D4q.js";import{b as y,C as A,M as c}from"./ContextMenuSection-CdG250Rt.js";import{a as D,M as E}from"./Modal-C0un89jH.js";import{H as G}from"./Heading-mkjIQ5vz.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./utils-D2KvaKmW.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./dynamic-C5kU0I4Y.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BBsn6OTc.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./Text-C5QP4r7D.js";import"./AlertIcon-BY058oDP.js";import"./Action-CDVhK15_.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./Overlay-DgiwrXuR.js";import"./ButtonView-sPVoFJZp.js";import"./Heading-C6yyDy0w.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Fr as __namedExportsOrder,zr as default};
